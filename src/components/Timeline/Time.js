import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Time = (props) => {
  const { time } = props
  return <small>{Math.round(time / 10) / 100}</small>
}

Time.propTypes = {
  time: PropTypes.number
}

const mapStateToProps = state => ({
  time: state.timeline.time
})
export default connect(mapStateToProps)(Time)
