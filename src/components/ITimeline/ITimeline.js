import React, { Component } from 'react'

import TimelineHeader from './TimelineHeader/TimelineHeader'
import TimelineMain from './TimelineMain/TimelineMain'
import Controls from './Controls/Controls'

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
    const rightWidth = 255
    const marginY = 10
    const marginX = 10

    const headerHeight = 30
    return (
      <div
        className='timeline bg-dark-gray border-top border-dark'
        ref='timeline'>
        <Controls />
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
