import { StyleSheet } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { colors } from "../../colors"


export default StyleSheet.create({
  postItemContainer: {
    marginBottom: 20
  },
  postContentContainer: {
    paddingLeft: 15,
    paddingRight: 15
  },
  imageContainer: {
    marginBottom: 15,
    marginTop: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nameText: {
    color: 'white',
    fontSize: RFValue(20, 680),
    fontWeight: '900',
  },
  contentText: {
    color: 'white',
    fontSize: RFValue(14, 680)
  }
})