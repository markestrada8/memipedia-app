import { StyleSheet } from 'react-native'
import { colors } from '../colors'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: colors.dark,
    paddingBottom: 15
  }
})