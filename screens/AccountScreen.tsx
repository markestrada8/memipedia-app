import { useContext } from 'react'
import { View } from 'react-native'
import { Button } from '../components/Button'
import CurrentUserContext from "../context/CurrentUserContext"
import * as SecureStore from 'expo-secure-store'

interface IAccountScreenProps {
  navigation: {
    navigate: (screenName: string) => void
  }
}

export default (props: IAccountScreenProps) => {
  const { setCurrentUser } = useContext(CurrentUserContext)

  const handleLogOut = async () => {
    await SecureStore.deleteItemAsync('memipedia_secure_token')
    setCurrentUser(null)
    props.navigation.navigate('AuthLoading')
  }

  return (
    <View style={{ padding: 15 }}>
      <Button onPress={handleLogOut} text="Sign Out" />
    </View>
  )
}