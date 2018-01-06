import { StyleSheet } from 'react-native'; 
import { colors, metrics } from './../../Styles'

const style = StyleSheet.create({
  body: {
    height: metrics.headerHeight + 5, 
    backgroundColor: colors.lighter,
    borderWidth: 1, 
    borderColor: '#ececee',
    shadowColor: "#000",
    flexDirection: 'row', 
    ...metrics.headerShadown
  }, 

  one: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  }, 

  one: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  two: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  three: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  four: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  five: {
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