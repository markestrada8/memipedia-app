import { useState, useEffect } from 'react'
import { View } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import API from '../utils/API'
import Container from '../components/layouts/Container'
import PostList from '../components/posts/PostList'


interface IFeedScreenProps {
  navigation: {
    navigate: (route: string, data?: any) => void;
  }
}

// export const FeedScreen = () => {
export default (props: IFeedScreenProps) => {
  const [posts, setPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = async () => {
    const token = await SecureStore.getItemAsync("memipedia_secure_token")

    setIsLoading(true)

    API.get('memipedia_posts', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        // console.log('FeedScreen posts GET response: ', response.data)
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

        <PostList
          isLoading={isLoading}
          posts={posts}
          navigate={props.navigation.navigate}
          getPosts={getPosts}
        />

      </View>
    </Container>
  )
}