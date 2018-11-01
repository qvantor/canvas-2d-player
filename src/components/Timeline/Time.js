import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { frameStore } from 'store'

class Time extends Component {
  componentDidMount () {
    this.unsubscribe = frameStore.subscribe(this.update)
  }

  calcTime = (frame = 0) => {
    const { frameTime } = this.props
    return Math.round((frame * frameTime) / 10) / 100
  }

  update = () => {
    const frame = frameStore.getState()
    this.refs.value.textContent = this.calcTime(frame)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {

    return (<small ref='value'>{this.calcTime()}</small>)
  }
}

Time.propTypes = {
  frameTime: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  frameTime: state.timeline.frameTime
})
export default connect(mapStateToProps)(Time)
