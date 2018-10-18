import React, { Component } from 'react'
import { connect } from 'react-redux'

class Line extends Component {
  render () {
    const { height, scale, frame } = this.props
    const x = scale(frame)
    return (
      <line
        className='line-time'
        x1={x}
        x2={x}
        y1={0}
        y2={height} />
    )
  }
}

const mapStateToProps = state => ({
  frame: state.timeline.frame
})
export default connect(mapStateToProps)(Line)