import { View, Text, ScrollView } from 'react-native'
import Container from '../components/layouts/Container'
import PostItem from '../components/posts/PostItem'

import postItemStyles from '../styles/stacks/posts/postItemStyles'

interface IPostDetailScreenProps {
  navigation: {
    navigate: any
    state: {
      params: {
        post: {
          id: number
          name: string
          content: string
          post_image_url: string
        }
      }
    }
    route: {
      params: any
    }
  }
}

export default (props: IPostDetailScreenProps) => {
  const { post } = props.navigation.state.params
  console.log("Post detail screen props: ", post)
  return (
    <Container navigate={props.navigation.navigate}>
      <ScrollView>
        <PostItem post={post} />
        <View style={postItemStyles.postContentContainer}>
          <Text style={postItemStyles.contentText}>{post.content}</Text>
        </View>
      </ScrollView>
    </Container>)
}