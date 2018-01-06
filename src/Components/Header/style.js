import { StyleSheet } from 'react-native'; 
import { colors, metrics } from './../../Styles'

const style = StyleSheet.create({
  body: {
    height: metrics.headerHeight, 
    backgroundColor: colors.white,
    borderWidth: 1, 
    borderColor: '#ececee',
    shadowColor: "#000",
    flexDirection: 'row', 
    ...metrics.headerShadown
  }, 

  left: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  }, 

  center: {
    flex: 6,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  right: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  brandImage: {
    width: 110, 
    height: 40
  }
})

export default style