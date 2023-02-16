import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  searchFormContainer: {
    padding: 15,
    flexDirection: 'row'
  },
  searchTextInput: {
    backgroundColor: 'white',
    width: '85%',
    height: 35,
    borderRadius: 5,
    fontWeight: '500',
    paddingLeft: 21
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%'
  },
  noResultsContainer: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  noResultsText: {
    fontWeight: '700',
    color: 'white'
  }
})