import { useState, useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import axios from 'axios'
import API from '../utils/API'
import * as SecureStore from 'expo-secure-store'

import Container from '../components/layouts/Container'
import { ScrollView } from 'react-navigation'
import PostItem from '../components/posts/PostItem'
import BaseStyles from '../styles/common/baseStyles'


interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => null;
  }
}

// export const FeedScreen = () => {
export default (props: IFeedScreenProps) => {
  const [posts, setPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = async () => {
    const token = await SecureStore.getItemAsync("memipedia_secure_token")
    API.get('memipedia_posts', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log('FeedScreen posts GET response: ', response.data)
        setPosts(response.data.memipedia_posts)
        setIsLoading(false)
      })
      .catch(error => {
        console.log('FeedScreen GET error: ', error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Container navigate={props.navigation.navigate}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView style={BaseStyles.containerWithBottomTabBar}>
            {posts.map(post => {
              return (
                <PostItem key={post.id} post={post} />
              )
            })}
          </ScrollView>
        )}

      </View>
    </Container>
  )
}