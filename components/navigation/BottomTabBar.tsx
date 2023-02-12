import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import bottomTabStyles from '../../styles/navigation/bottomTabStyles'

interface IBottomTabBarProps {
  navigate: (arg: string) => null
}

export default (props: IBottomTabBarProps) => {
  return (
    <View style={bottomTabStyles.container}>
      <TouchableOpacity onPress={() => props.navigate('Feed')}>
        <Text>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate('Search')}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate('PostForm')}>
        <Text>Post Form</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate('Account')}>
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  )
}