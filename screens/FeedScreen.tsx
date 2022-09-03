import React from "react"
import { Text, View, TouchableOpacity } from 'react-native'

interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => void;
  }
}

// export const FeedScreen = () => {
export default (props: IFeedScreenProps) => {
  return (
    <View>
      <Text>Feed Screen</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
        <Text>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('PostForm')}>
        <Text>Post Form</Text>
      </TouchableOpacity>
    </View>
  )
}