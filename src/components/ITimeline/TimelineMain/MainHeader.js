import React from 'react'
import PropTypes from 'prop-types'

import { axisBottom } from 'd3-axis'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'
import TimeIndicator from './TimeIndicator'

import { frameStore } from 'store'

const { setFrame } = frameStore

const MainHeader = (props) => {
  const { width, scale, rightWidth } = props
  const axis = axisBottom()
    .scale(scale)
    .tickPadding([-6])
    .ticks(width / 60)
    .tickFormat(v => `${v}f`)

  const frameToStore = (el) => () => {
    const newFrame = Math.round(scale.invert(mouse(el)[0]))
    const frame = frameStore.getState()
    if (newFrame !== frame) setFrame(newFrame)
  }

  return (
    <svg className='timeline-main-header' width={width} height={30}>
      <g
        transform={`translate(${rightWidth},0)`}
        ref={el =>
          select(el)
            .on('click', frameToStore(el))
            .call(drag().on('drag', frameToStore(el)))}>
        <rect className='bg-rect' width={width} height={30} />
        <g
          transform={`translate(0,20)`}
          className='x-axis'
          ref={el => select(el).call(axis)} />
        <TimeIndicator scale={scale} />
      </g>
    </svg>
  )
}

MainHeader.propTypes = {
  rightWidth: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
}

export default MainHeader
