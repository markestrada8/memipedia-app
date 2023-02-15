import { View } from 'react-native'
import BottomTabBar from '../navigation/BottomTabBar'

import BaseStyles from '../../styles/common/baseStyles'

interface IContainerProps {
  children: any
  navigate: (arg: string) => null
}

export default (props: IContainerProps) => {
  return (
    <View style={BaseStyles.container}>
      {props.children}
      <BottomTabBar navigate={props.navigate} />
    </View>
  )
}