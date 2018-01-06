import { StyleSheet } from 'react-native'; 
import { colors, fonts } from './../../Styles'

const style = StyleSheet.create({
  body: {
    height: 140, 
    backgroundColor: colors.lighter
  }, 

  textContainer: {
    flex: .4,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginLeft: 10,
    marginRight: 10,
  }, 
  
  historiesWrapper: {
    flex: 1
  }, 

  textHistory: {
    fontSize: fonts.regular, 
    fontWeight: 'bold',
    color: colors.darker
  }, 

  textPlayAll: {
    fontSize: fonts.regular, 
    fontWeight: 'bold',
    color: colors.darker
  }
})

export default style