import { StyleSheet } from 'react-native'; 
import { colors, metrics, fonts } from './../../../Styles'

const style = StyleSheet.create({
  body: {
    height: 25,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row', 
  }, 

  left: {
    flex: .1,
    justifyContent: 'center', 
    alignItems: 'flex-start'
  }, 

  right: {
    flex: .9,
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: colors.light,
    borderWidth: 1, 
    borderRadius: 25
  },

  userPic: {
    width: 25, 
    height: 25,
    borderWidth: 10, 
    borderRadius: 100
  },

  textInput: {
    width: '100%',
    height: '100%', 
    fontSize: fonts.small,
    padding: 0,
    paddingLeft: 10,
  }
})

export default style