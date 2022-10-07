import { View } from 'react-native'
import BottomTabBar from '../navigation/BottomTabBar'

interface IContainerProps {
  children: any
  navigate: (arg: string) => null
}

export default (props: IContainerProps) => {
  return (
    <View>
      {props.children}
      <BottomTabBar navigate={props.navigate} />
    </View>
  )
}