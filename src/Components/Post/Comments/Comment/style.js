import { StyleSheet } from 'react-native'; 
import { colors, metrics, fonts } from './../../../../Styles'

const style = StyleSheet.create({
  body: {
    height: 'auto',
    marginTop: 1,
    marginLeft: 10, 
    marginRight: 10
  }, 
  textUsername: {
    color: colors.darker,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  }, 
  
  textComment: {
    fontSize: fonts.regular,
    color: colors.dark,
  }
})

export default style