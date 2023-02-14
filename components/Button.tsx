import { Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

import textInputStyles from "../styles/form-styles/textInputStyles"
import { colors } from "../styles/colors"

interface IButtonProps {
  text: string
  onPress: any
  disabled?: boolean
}

export const Button = (props: IButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.disabled ? colors.lightGrey : colors.highlight,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5
      }}
      {...props}
    >
      <Text style={
        {
          ...textInputStyles.textElement,
          color: props.disabled ? colors.highlight : '#fff'
        }
      }>{props.text}</Text>
    </TouchableOpacity>
  )
}