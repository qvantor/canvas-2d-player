import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Text extends Component {
  render () {
    const { item } = this.props

    return (
      <div>text</div>
    )
  }
}

Text.propTypes = {
  item: PropTypes.object
}

export default Text
