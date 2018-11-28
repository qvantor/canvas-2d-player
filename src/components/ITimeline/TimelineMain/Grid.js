import React from 'react'
import PropTypes from 'prop-types'

import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'

const Grid = (props) => {
  const { scale, width, height } = props
  const axis = axisBottom()
    .scale(scale)
    .tickPadding([-6])
    .ticks(width / 60)
    .tickSize(height)

  return (
    <g className='timeline-grid' ref={el => select(el).call(axis)} />
  )
}

Grid.propTypes = {
  height: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

export default Grid
