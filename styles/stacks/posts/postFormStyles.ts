import { StyleSheet } from "react-native"
import { colors } from "../../colors"

export default StyleSheet.create({
  container: {
    height: '100%',
  },
  formGrid: {
    flexDirection: 'row',
    marginBottom: 20
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    borderLeftColor: colors.lightGrey,
    borderLeftWidth: 1,
    padding: 10
  },
  textArea: {
    height: 76
  },
  buttonContainer: {
    paddingRight: 15,
    paddingLeft: 15
  },
})