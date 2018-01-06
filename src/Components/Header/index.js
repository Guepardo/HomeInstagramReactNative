import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style'

const source = { uri: 'https://tctechcrunch2011.files.wordpress.com/2014/06/instagram_topic.png?w=600&h=280&crop=1' }

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.left}>
          <Icon name="camera" size={20} color="black" />
        </View>
        <View style={style.center}>
          <Image source={source} style={style.brandImage} /> 
        </View>
        <View style={style.right}>
          <Icon name="paper-plane" size={20} color="black" />
        </View>
      </View> 
    )
  }
}

export default Header