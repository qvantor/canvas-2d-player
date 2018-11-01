import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { scaleLinear } from 'd3-scale'

import XAxis from './SVG/XAxis'
import Line from './SVG/Line'
import TimelineEditorList from './TimelineEditorList'
import * as frameStore from '../../store/frameStore'

class TimelineEditor extends Component {
  render () {
    const { width, height, frames } = this.props
    const padding = 5

    const xScale = scaleLinear()
      .domain([0, frames])
      .range([0, width - (padding * 1.5)])

    return (
      <div className='timeline-editor'>
        <svg className='axis' height={40} width={width}>
          <g transform={`translate(${padding},${padding})`}>
            <XAxis scale={xScale} width={width} />
          </g>
        </svg>
        <svg className='line' height={height} width={width}>
          <g transform={`translate(${padding},${padding})`}>
            <Line scale={xScale} height={height} />
          </g>
        </svg>
        <TimelineEditorList scale={xScale} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  frames: state.timeline.frames
})
export default connect(mapStateToProps)(TimelineEditor)
