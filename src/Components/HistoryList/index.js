import React, { Component } from 'react'

import {
  View, 
  Text,
  ScrollView
} from 'react-native'

import style from './style'

import History from './History'

class HistoryList extends Component {
  constructor(props) {
    super(props)
  }

  _renderHistories() {
    let fakeHistories = require('./../../FakeData/histories.json')

    let components = 
    fakeHistories.map( history => {
      return <History history={history} key={history.id}/> 
    })

    return components
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.textContainer}>
          <Text style={style.textHistory}>Histórias</Text>
          <Text style={style.textPlayAll}>► Assistir a Todas</Text>
        </View> 
        <View style={style.historiesWrapper}>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            { this._renderHistories() }
          </ScrollView> 
        </View> 
      </View> 
    )
  }
}

export default HistoryList