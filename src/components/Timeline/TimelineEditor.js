import React, { Component } from 'react'
import { connect } from 'react-redux'
import { scaleLinear } from 'd3-scale'

import XAxis from './SVG/XAxis'
import Line from './SVG/Line'

class TimelineEditor extends Component {
  render () {
    const { width, height, duration } = this.props
    const padding = 15

    const xScale = scaleLinear()
      .domain([0, duration])
      .range([0, width - (padding * 1.5)])

    return (
      <div className='timeline-editor'>
        <svg height={height} width={width}>
          <g transform={`translate(5,${padding})`}>
            <XAxis scale={xScale} width={width} />
            <Line scale={xScale} height={height} />
          </g>
        </svg>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  duration: state.timeline.duration
})
export default connect(mapStateToProps)(TimelineEditor)
