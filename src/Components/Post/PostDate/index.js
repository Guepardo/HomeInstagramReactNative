import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style'

class PostDate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.center}>
          <Text style={style.textDate}>HÁ {this.props.date}</Text>
        </View>
      </View> 
    )
  }
}

export default PostDate