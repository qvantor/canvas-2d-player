import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TransformParams from './TransformParams'

class ObjectParams extends Component {
  static propTypes = {}

  render () {
    const { item, rightWidth, width, scale } = this.props

    return (
      <div className='object-params'>
        <TransformParams item={item} rightWidth={rightWidth} width={width} scale={scale} />
      </div>
    )
  }
}

export default ObjectParams
