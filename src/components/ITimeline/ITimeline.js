import React, { Component } from 'react'

import TimelineHeader from './TimelineHeader/TimelineHeader'
import TimelineMain from './TimelineMain/TimelineMain'

class ITimeline extends Component {
  state = { width: 700, height: 300 }

  componentDidMount () {
    this.setState({
      height: this.refs.timeline.clientHeight,
      width: this.refs.timeline.clientWidth
    })
  }

  render () {
    const { width, height } = this.state
    const rightWidth = 256
    const marginY = 10
    const marginX = 10

    const headerHeight = 30
    return (
      <div
        className='timeline bg-asbestos border-top border-dark'
        ref='timeline'>
        <TimelineHeader
          width={width - (marginX * 2)}
          height={headerHeight}
          rightWidth={rightWidth}
          marginY={marginY} />
        <TimelineMain
          width={width - (marginX * 2)}
          height={height - headerHeight}
          rightWidth={rightWidth}
          marginY={marginY} />
      </div>
    )
  }
}

export default ITimeline
