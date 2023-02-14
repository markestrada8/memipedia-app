import { useEffect, useContext } from "react"
import { View } from "react-native"
import CurrentUserContext from "../../context/CurrentUserContext"

import axios from 'axios'
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
    const token = await SecureStore.getItemAsync("memipedia_secure_token")

    if (token) {

    } else {
      setCurrentUser(null)
      props.navigation.navigate('Auth')
    }
  }

  return (
    <View>

    </View>
  )
}
