import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { scaleLinear } from 'd3-scale'
import MainHeader from './MainHeader'
import Grid from './Grid'

const TimelineMain = (props) => {
  const { width, rightWidth, marginY, selection, height } = props

  const mainHeaderHeight = 12
  const timelineMainHeight = height - mainHeaderHeight
  const croppedScale = scaleLinear()
    .domain(selection)
    .range([0, width - rightWidth - 5])
  return (
    <div>
      <MainHeader
        scale={croppedScale}
        width={width}
        height={mainHeaderHeight}
        rightWidth={rightWidth}
        marginY={marginY} />
      <svg
        width={width}
        height={timelineMainHeight}
        className='timeline-main'>
        <g transform={`translate(${rightWidth},0)`}>
          <Grid
            width={width}
            height={timelineMainHeight}
            scale={croppedScale}
            rightWidth={rightWidth} />
        </g>
      </svg>
    </div>
  )
}

TimelineMain.propTypes = {
  rightWidth: PropTypes.number.isRequired,
  marginY: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  selection: PropTypes.arrayOf(PropTypes.number).isRequired
}

const mapStateToProps = state => ({
  selection: state.timeline.selection
})
export default connect(mapStateToProps)(TimelineMain)
