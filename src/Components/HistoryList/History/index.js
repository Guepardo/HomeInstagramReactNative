import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import style from './style'

class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { pic, username } = this.props.history
    return (
      <View style={style.body}>
        <View style={style.imageContainer}>
          <Image
            source={{uri: pic}}
            style={style.userPic}
          /> 
        </View> 
        <View style={style.usernameContainer}>
          <Text
            style={ username == 'Você' ? style.textYou : style.textFriend}
          >{username}</Text>
        </View> 
      </View> 
    )
  }
}

export default History