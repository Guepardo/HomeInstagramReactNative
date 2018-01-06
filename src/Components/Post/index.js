import React, { Component } from 'react'

import {
  View, 
  Text, 
  Image
} from 'react-native'

import PostHeader from './PostHeader'
import PostActions from './PostActions'
import Comments from './Comments'
import PostInput from './PostInput'
import PostDate from './PostDate'

import style from './style'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={style.body}>
        <PostHeader post={this.props.post} />
        <Image
          source={{uri: this.props.post.image}}
          resizeMethod={'scale'}
          style={style.imagePost}
        />
        <PostActions />
        <Text style={style.textLikes}>{this.props.post.likes} curtidas</Text>
        <Comments comments={this.props.post.comments} />
        <PostInput />
        <PostDate date={this.props.post.date}/>  
      </View> 
    )
  }
}

export default Post