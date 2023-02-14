import { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Button } from '../../components/Button'
import { formatErrors } from '../../utils/errorFormatter'
import API from '../../utils/API'
import CurrentUserContext from '../../context/CurrentUserContext'

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

  const userState = useContext(CurrentUserContext)



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
      .then(response => {
        // console.log("Response from JWT POST", response.data)

        if (response.data.jwt) {
          props.navigation.navigate('Feed')
        } else {
          alert('Wrong email or password, please try again')
        }
        setIsSubmitting(false)
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
        console.log("Response from Create User POST", response.data)


        if (response.data.memipedia_user) {
          props.navigation.navigate('Feed')
        } else {
          alert(`Error creating user account: ${formatErrors(response.data.errors)}`)
        }
        setIsSubmitting(false)
      })
      .catch(error => {
        setIsSubmitting(false)
        alert('Error creating user account')
      })
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    formToShow === 'Login' ? handleLogin() : handleRegister()

  }

  return (
    <ScrollView style={authScreenStyles.container}>
      {/* <Text style={textInputStyles.textElement}>{formToShow}</Text> */}
      <View style={textInputStyles.textInputContainer}>
        <TextInput
          style={textInputStyles.textInput}
          placeholder='Email'
          value={email}
          onChangeText={val => setEmail(val)}
          autoCapitalize="none"
          spellCheck={false}
        />
      </View>
      <View style={textInputStyles.textInputContainer}>
        <TextInput
          style={textInputStyles.textInput}
          placeholder='Password'
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
        />
      </View>
      {/* String represntation of a data object */}
      {/* <Text style={{ color: "white" }}>{JSON.stringify(userState.currentUser)}</Text> */}

      <TouchableOpacity onPress={handleAuthTypePress}>
        <Text style={textInputStyles.textElement}>{screenTypeText()}</Text>
      </TouchableOpacity>
      {isSubmitting
        ?
        <Button text={'Submitting...'} onPress={handleSubmit} disabled={isSubmitting} />
        :
        <Button text={formToShow} onPress={handleSubmit} disabled={isSubmitting} />
      }

      {/* <Button text={formToShow} action={handleSubmit} /> */}

    </ScrollView>
  )
}