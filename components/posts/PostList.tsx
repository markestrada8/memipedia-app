import { ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator } from "react-native"
import PostItem from "./PostItem"

import baseStyles from "../../styles/common/baseStyles"

interface IPostListProps {
  posts: any
  navigate: (route: string, data: any) => void
  getPosts?: () => void
  isLoading: boolean
}

export default (props: IPostListProps) => {


  const handleItemPress = (post: any) => {
    props.navigate('PostDetail', { post: post })
  }

  const renderPosts = () => {

    if (props.isLoading && props.posts.length === 0) {
      return <ActivityIndicator color="white" size="large" />
    } else if (props.posts.length > 0) {
      return props.posts.map((post: any) => (
        <TouchableOpacity
          key={post.id}
          onPress={() => handleItemPress(post)}
        >
          <PostItem post={post} />
        </TouchableOpacity>
      )
      )
    } else {
      return null
    }
  }

  const handleRefresh = () => {
    if (props.getPosts) {
      props.getPosts()
    }
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isLoading}
          onRefresh={handleRefresh}
          tintColor='white'
          colors={['white']}
        />}
      style={baseStyles.containerWithBottomTabBar}
    >
      {renderPosts()}
    </ScrollView>
  )
}