import React, { Component } from 'react'
import { frameStore } from 'store'

class Line extends Component {
  componentDidMount () {
    this.unsubscribe = frameStore.subscribe(this.update)
  }

  update = () => {
    const { scale } = this.props
    const frame = frameStore.getState()
    const x = scale(frame)
    this.refs.line.x1.baseVal.value = x
    this.refs.line.x2.baseVal.value = x
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { height, scale } = this.props
    const x = scale(frameStore.getState())
    return (
      <line
        ref='line'
        className='line-time'
        x1={x}
        x2={x}
        y1={0}
        y2={height} />
    )
  }
}

export default Line
