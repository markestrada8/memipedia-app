import React from "react"
import { Text, View } from 'react-native'
import PostImagePicker from '../components/posts/PostImagePicker'

export default () => {
  return (
    <View>
      <Text>PostForm Screen</Text>
      <View style={{ marginTop: 40 }}>
        <PostImagePicker />
      </View>
    </View>
  )
}