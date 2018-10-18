import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Time = (props) => {
  const { frame, frameTime } = props
  return <small>
    {Math.round((frame * frameTime) / 10) / 100}
  </small>
}

Time.propTypes = {
  frame: PropTypes.number.isRequired,
  frameTime: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  frame: state.timeline.frame,
  frameTime: state.timeline.frameTime
})
export default connect(mapStateToProps)(Time)
