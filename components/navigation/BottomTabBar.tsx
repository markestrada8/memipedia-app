import { View, Text, TouchableOpacity } from 'react-native'

interface IBottomTabBarProps {
  navigate: (arg: string) => null
}

export default (props: IBottomTabBarProps) => {
  return (
    <View>
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