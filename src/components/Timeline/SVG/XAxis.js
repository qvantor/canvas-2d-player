import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { axisBottom } from 'd3-axis'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

import { setTime } from 'reducers/timeline/timeline.actions'

class XAxis extends Component {
  render () {
    const { scale, width } = this.props

    return (
      <g ref={el => {
        select(el)
          .on('click', () => setTime(Math.round(scale.invert(mouse(el)[0]))))
          .call(drag().on('drag', () => setTime(Math.round(scale.invert(mouse(el)[0])))))
      }}>
        <g ref={el => {
          const axis = axisBottom()
            .scale(scale)
            .tickPadding([12])
            .ticks([8])
          select(el).call(axis)
        }} />
        <rect className='bg-rect' width={width} height={30} />
      </g>
    )
  }
}

export default XAxis
