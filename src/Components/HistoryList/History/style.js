import { StyleSheet } from 'react-native'; 
import { colors, fonts } from './../../../Styles'

const style = StyleSheet.create({
  body: {
    height: 100, 
    width: 85,
    alignSelf: 'center',  
  },
  
  imageContainer: {
    flex: .75,
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  
  usernameContainer: {
    flex: .25,
    justifyContent: 'flex-start', 
    alignItems: 'center'
  }, 

  userPic: {
    width: 70,
    height: 70, 
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white'
  },

  textYou: {
    color: colors.darker,
    fontSize: fonts.small
  },
  
  textFriend: {
    color: colors.light,
    fontSize: fonts.small
  }
})

export default style