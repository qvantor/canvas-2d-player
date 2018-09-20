import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ControlsFrames extends Component {
  render () {
    const { obj } = this.props

    return (
      <div>{Object.keys(obj.keyframes).map(item =>
        <div className='keyframe' key={item}>{item}</div>)}
      </div>
    )
  }
}

export default ControlsFrames
