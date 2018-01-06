import { StyleSheet } from 'react-native'; 
import { colors, metrics, fonts } from './../../../Styles'

const style = StyleSheet.create({
  body: {
    height: 25,
    marginLeft: 10, 
    flexDirection: 'row', 
  }, 

  center: {
    flex: 6.5,
    justifyContent: 'center', 
    alignItems: 'flex-start'
  },

  textDate: {
    color: colors.ligth,
    fontSize: fonts.smaller,
  }
})

export default style