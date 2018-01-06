import { StyleSheet } from 'react-native'; 
import { colors, metrics, fonts } from './../../../Styles'

const style = StyleSheet.create({
  body: {
    height: metrics.headerHeight, 
    flexDirection: 'row',
    marginLeft: 10, 
    marginRight: 10
  }, 

  left: {
    flex: .35,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexDirection: 'row'
  }, 

  right: {
    marginRight: 15,
    flex: .65,
    justifyContent: 'center', 
    alignItems: 'flex-end'
  }
})

export default style