import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Objects from './Objects/Objects'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (<Provider store={store}>
      <Objects />
    </Provider>)
  }
}
