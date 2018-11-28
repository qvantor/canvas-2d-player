import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as frameStore from 'store/frameStore'

class TimeIndicator extends Component {
  componentDidMount () {
    this.unsubscribe = frameStore.subscribe(this.update)
  }

  update = () => {
    const { scale } = this.props
    const frame = frameStore.getState()
    const x = scale(frame)
    this.refs.line.setAttribute('transform', `translate(${x},5)`)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { scale } = this.props
    const frame = frameStore.getState()
    const x = scale(frame)

    return (
      <g
        ref='line'
        className='timeline-indicator'
        transform={`translate(${x},5)`}>
        <path
          className='timeline-indicator-head'
          d='M -5 -3 L -5 5 L 0 10 L 5 5 L 5 -3 L -5 -3' />
        <rect
          className='timeline-indicator-line'
          x='-0.5'
          y='0'
          width='1'
          height='1000' />
      </g>
    )
  }
}

TimeIndicator.propTypes = {
  scale: PropTypes.func.isRequired
}

export default TimeIndicator
