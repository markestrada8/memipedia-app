import { StyleSheet } from 'react-native'
import { colors } from '../../colors'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.dark,
    height: '100%',
    padding: 15
  }
})