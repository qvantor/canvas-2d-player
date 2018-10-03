import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Root from './Root/Root'

export default class App extends Component {
  render () {
    const { store } = this.props
    return (<Provider store={store}>
      <Root />
    </Provider>)
  }
}
