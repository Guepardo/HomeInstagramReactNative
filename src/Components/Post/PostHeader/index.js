import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style'

class PostHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {pic, username, location} = this.props.post
    return (
      <View style={style.body}>
        <View style={style.left}>
          <Image
            source={{uri: pic}}
            style={style.friendPic}
          /> 
        </View>
        <View style={style.center}>
          <Text style={style.textUsername}>{username}</Text>
          {
            location != 'null' &&
            <Text style={style.textLocation}>{location}</Text>
          }
        </View>
        <View style={style.right}>
          <Icon name="ellipsis-v" size={20} color="#999999" />
        </View>
      </View> 
    )
  }
}

export default PostHeader