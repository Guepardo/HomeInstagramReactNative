import { StyleSheet } from 'react-native'; 
import { colors, metrics, fonts } from './../../../Styles'

const style = StyleSheet.create({
  body: {
    height: 50,
    marginLeft: 10,
    flexDirection: 'row', 
  }, 

  left: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-start'
  }, 

  center: {
    flex: 6.5,
    justifyContent: 'center', 
    alignItems: 'flex-start'
  },

  right: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  friendPic: {
    width: 30, 
    height: 30,
    borderWidth: 10, 
    borderRadius: 100
  }, 

  textUsername: {
    color: colors.darker,
    fontSize: fonts.regular,
    fontWeight: 'bold'
  }, 
  
  textLocation: {
    color: colors.darker,
    fontSize: fonts.small,
  }
})

export default style