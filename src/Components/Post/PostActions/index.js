import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style'

class PostActions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.left}>
          <Icon name="heart-o" size={25} color="#333" />
          <Icon name="comment-o" size={25} color="#333" />
          <Icon name="paper-plane-o" size={25} color="#333" />
        </View>
        <View style={style.right}>
          <Icon name="bookmark-o" size={25} color="#333" />
        </View>
      </View> 
    )
  }
}

export default PostActions