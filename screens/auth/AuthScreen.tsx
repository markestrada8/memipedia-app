import { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Button } from '../../components/Button'
import { formatErrors } from '../../utils/errorFormatter'
import API from '../../utils/API'
import CurrentUserContext from '../../context/CurrentUserContext'
import * as SecureStore from 'expo-secure-store'

import textInputStyles from '../../styles/form-styles/textInputStyles'
import authScreenStyles from '../../styles/stacks/auth/authScreenStyles'

interface IAuthScreenProps {
  navigation: {
    navigate: (arg: string) => null;
  }
}

export default (props: IAuthScreenProps) => {
  const [formToShow, setFormToShow] = useState('Login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { getUser } = useContext(CurrentUserContext)



  const screenTypeText = () => {
    if (formToShow === 'Login') {
      return 'Need an account? Sign up'
    } else if (formToShow === 'Register') {
      return 'Already have an account? Sign in'
    }
  }

  const handleAuthTypePress = () => {
    if (formToShow === 'Login') {
      setFormToShow('Register')
    } else if (formToShow === 'Register') {
      setFormToShow('Login')
    }
  }

  const handleLogin = () => {
    const payload = {
      auth: {
        email: email,
        password: password
      }
    }
    API.post('memipedia_user_token', payload)
      .then(async response => {
        // console.log("Response from JWT POST", response.data)
        if (response.data.jwt) {
          // Set token response in Expo SecureStore as (k, v) pair
          await SecureStore.setItemAsync('memipedia_secure_token', response.data.jwt)
          getUser()
          setIsSubmitting(false)
          props.navigation.navigate('Feed')
        } else {
          setIsSubmitting(false)
          alert('Wrong email or password, please try again')
        }
        // Needs to run before changes to stack location are applied
        // setIsSubmitting(false)
      })
      .catch(error => {
        setIsSubmitting(false)
        alert('Wrong email or password, please try again')
      })
  }

  const handleRegister = () => {
    const payload = {
      user: {
        email: email,
        password: password
      }
    }
    API.post('memipedia_users', payload)
      .then(response => {
        // console.log("Response from Create User POST", response.data)
        if (response.data.memipedia_user) {
          handleLogin()
        } else {
          setIsSubmitting(false)
          alert(`Error creating user account: ${formatErrors(response.data.errors)}`)
        }

      })
      .catch(error => {
        setIsSubmitting(false)
        console.log('New User POST error: ', error)
        alert('Error creating user account')
      })
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    formToShow === 'Login' ? handleLogin() : handleRegister()

  }

  return (
    <ScrollView style={authScreenStyles.container}>
      <View style={textInputStyles.textInputContainer}>
        <TextInput
          style={textInputStyles.textInput}
          placeholder='Email'
          value={email}
          onChangeText={val => setEmail(val)}
          autoCapitalize="none"
          spellCheck={false}
          keyboardType='email-address'
        />
      </View>

      <View style={textInputStyles.textInputContainer}>
        <TextInput
          style={textInputStyles.textInput}
          placeholder='Password'
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
          onSubmitEditing={handleSubmit}
        />
      </View>

      <TouchableOpacity onPress={handleAuthTypePress}>
        <Text style={textInputStyles.textElement}>{screenTypeText()}</Text>
      </TouchableOpacity>
      {isSubmitting
        ?
        <Button text={'Submitting...'} onPress={handleSubmit} disabled={isSubmitting} />
        :
        <Button text={formToShow} onPress={handleSubmit} disabled={isSubmitting} />
      }

    </ScrollView>
  )
}