import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style'

const source = { uri: 'http://lorempixel.com/200/200/people/1/' }

class Comment extends Component {
  constructor(props) {
    super(props)
  }

  _cutText() {
    let {text} = this.props.comment
    if( text.length > 100 ) {
      return text.substring(0, 90) 
    }
    return text
  }

  render() {
    let {username, text} = this.props.comment
    return (
      <View style={style.body}>
        <Text> 
          <Text style={style.textUsername}>{username} </Text>
          <Text style={style.textComment}>{this._cutText()}</Text> 
          {
            text.length > 90 &&
            <Text>... mais</Text> 
          }
        </Text>
      </View> 
    )
  }
}

export default Comment