import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'

const AxisX = (props) => {
  const { scale, width } = props
  const axis = axisBottom()
    .scale(scale)
    .tickPadding([6])
    .ticks(width / 60)

  return (<g className='x-axis' ref={el => select(el).call(axis)} />)
}

AxisX.propTypes = {
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  frames: state.timeline.frames
})
export default connect(mapStateToProps)(AxisX)
