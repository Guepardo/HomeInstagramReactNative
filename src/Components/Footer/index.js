import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.one}>
          <Icon name="home" size={25} color="#262626" />
        </View>
        <View style={style.two}>
          <Icon name="search" size={25} color="#c7c7c7" />
        </View>
        <View style={style.three}>
          <Icon name="plus-square" size={25} color="#c7c7c7" />
        </View>
        <View style={style.four}>
          <Icon name="heart" size={25} color="#c7c7c7" />
        </View>
        <View style={style.five}>
          <Icon name="user" size={25} color="#c7c7c7" />
        </View>
      </View> 
    )
  }
}

export default Footer