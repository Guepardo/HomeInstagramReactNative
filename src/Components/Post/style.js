import { StyleSheet } from 'react-native'; 
import { colors, metrics, fonts } from './../../Styles'

const style = StyleSheet.create({
  body: {
    height: 'auto'
  }, 

  imagePost: {
    width: '100%',
    height: 250
  },

  textLikes: {
    marginLeft: 10, 
    fontSize: fonts.regular, 
    color: colors.darker, 
    fontWeight: 'bold'
  }
})

export default style