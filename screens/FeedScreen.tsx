import { Text, View, TouchableOpacity } from 'react-native'
import Container from '../components/layouts/Container'

interface IFeedScreenProps {
  navigation: {
    navigate: (arg: string) => null;
  }
}

// export const FeedScreen = () => {
export default (props: IFeedScreenProps) => {
  return (
    <Container navigate={props.navigation.navigate}>
      <Text>Feed Screen</Text>

    </Container>
  )
}