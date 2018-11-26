import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { scaleLinear } from 'd3-scale'
import AxisX from './AxisX'
import Brush from './Brush'

const TimelineHeader = (props) => {
  const { width, height, rightWidth, marginY, frames } = props

  const scale = scaleLinear()
    .domain([0, frames])
    .range([0, width - rightWidth - 5])

  return (
    <svg className='timeline-header' width={width} height={height}>
      <g transform={`translate(${rightWidth},${marginY})`}>
        <AxisX width={width - rightWidth} scale={scale} />
        <Brush width={width - rightWidth} scale={scale} />
      </g>
    </svg>
  )
}

TimelineHeader.propTypes = {
  frames: PropTypes.number.isRequired,
  rightWidth: PropTypes.number.isRequired,
  marginY: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  frames: state.timeline.frames
})
export default connect(mapStateToProps)(TimelineHeader)
