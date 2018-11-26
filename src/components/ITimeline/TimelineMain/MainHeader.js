import React from 'react'
import PropTypes from 'prop-types'

import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'

const MainHeader = (props) => {
  const { width, scale, rightWidth } = props
  const axis = axisBottom()
    .scale(scale)
    .tickPadding([-6])
    .ticks(width / 60)
    .tickFormat(v => `${v}f`)

  return (
    <svg className='timeline-main-header' width={width} height={12}>
      <g
        transform={`translate(${rightWidth},0)`}
        className='x-axis'
        ref={el => select(el).call(axis)} />
    </svg>
  )
}

MainHeader.propTypes = {
  rightWidth: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}
MainHeader.defaultProps = {}

export default MainHeader
