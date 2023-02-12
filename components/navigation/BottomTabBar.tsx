import { View, Text, TouchableOpacity } from 'react-native'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import bottomTabStyles from '../../styles/navigation-styles/bottomTabStyles'

interface IBottomTabBarProps {
  navigate: (arg: string) => null
}

export default (props: IBottomTabBarProps) => {
  return (
    <View style={bottomTabStyles.container}>
      <TouchableOpacity onPress={() => props.navigate('Feed')}>
        <MCIcon name="newspaper-variant-multiple" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate('Search')}>
        <AntIcon name="search1" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate('PostForm')}>
        <AntIcon name="form" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigate('Account')}>
        <MCIcon name="account" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}