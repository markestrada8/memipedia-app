import { useEffect, useContext } from "react"
import { View } from "react-native"
import CurrentUserContext from "../../context/CurrentUserContext"

import API from "../../utils/API"
import * as SecureStore from 'expo-secure-store'

interface IAuthLoadingScreenProps {
  navigation: {
    navigate: (screenName: string) => void
  }
}

export default (props: IAuthLoadingScreenProps) => {
  const { setCurrentUser } = useContext(CurrentUserContext)

  useEffect(() => {
    checkCredentials()
  }, [])

  const checkCredentials = async () => {
    // Check Expo SecureStore to see if there is a value
    const token = await SecureStore.getItemAsync("memipedia_secure_token")

    if (token) {
      API.get('logged_in', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {

          // console.log("User credential check GET", response.data)

          if (response.data.memipedia_user) {
            setCurrentUser(response.data.memipedia_user)
            props.navigation.navigate('App')
          } else {
            setCurrentUser(null)
            props.navigation.navigate('Auth')
          }
        })
        .catch(error => {
          setCurrentUser(null)
          console.log('User credential check error: ', error)
          props.navigation.navigate('Auth')
        })
    } else {
      setCurrentUser(null)
      props.navigation.navigate('Auth')
    }
  }

  return (
    <View />
  )
}
