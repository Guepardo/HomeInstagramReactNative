import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image, 
  TextInput
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style'

class PostInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.left}>
          <Image
            source={{uri: 'http://lorempixel.com/200/200/people/1/'}}
            style={style.userPic}
          /> 
        </View>
        <View style={style.right}>
          <TextInput
            underlineColorAndroid={'transparent'}
            placeholder={'Adicione um comentário...'}
            allowFontScaling={true}
            style={style.textInput}
          /> 
        </View>
      </View> 
    )
  }
}

export default PostInput