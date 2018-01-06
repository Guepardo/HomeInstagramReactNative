import React, { Component } from 'react'

import {
  View, 
  Text,
  ScrollView
} from 'react-native'

import style from './style'

import Header from './../../Components/Header'
import Footer from './../../Components/Footer'
import HistoryList from './../../Components/HistoryList'
import Post from './../../Components/Post'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  _renderPosts() {
    let posts = require('./../../FakeData/posts.json')
    return posts.map( post => {
      return (<Post key={post.id} post={post} />)
    })
  }
  render() {
    return (
      <View style={style.container}>
        <Header />
        <ScrollView> 
          <HistoryList />
          { this._renderPosts() }
        </ScrollView>
        <Footer /> 
      </View> 
    )
  }
}

export default Home