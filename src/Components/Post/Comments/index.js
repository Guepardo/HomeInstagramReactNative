import React, { Component } from 'react'

import {
  View, 
} from 'react-native'

import Comment from './Comment'

import style from './style'

class Comments extends Component {
  constructor(props) {
    super(props)
  }

  _renderComments() {
    return this.props.comments
      .map( comment => {
        return ( <Comment key={comment.id} comment={comment} />)
      })
  }
  render() {
    return (
      <View style={style.body}>
        { this._renderComments() } 
      </View> 
    )
  }
}

export default Comments