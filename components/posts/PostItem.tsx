import { Text, View, Dimensions } from "react-native"
import AutoHeightImage from "react-native-auto-height-image"
import postItemStyles from "../../styles/stacks/posts/postItemStyles"

interface IPostItemProps {
  post: {
    id: number
    name: string
    post_image_url: string
  }
}

export default (props: IPostItemProps) => {
  const { name, post_image_url } = props.post
  return (
    <View style={postItemStyles.postItemContainer}>
      <View style={postItemStyles.imageContainer}>
        <AutoHeightImage width={Dimensions.get('window').width} source={{ uri: post_image_url }} />
      </View>
      <View style={[postItemStyles.postContentContainer, postItemStyles.postHeader]}>
        <Text style={postItemStyles.nameText}>{name}</Text>
      </View>
    </View>
  )
}