import React, { Component } from 'react'
import { connect } from 'react-redux'

import Buttons from './Buttons'
import TimelineEditor from './TimelineEditor'

class Timeline extends Component {
  state = { width: 0, height: 0 }

  componentDidMount () {
    this.setState({ height: this.refs.timeline.clientHeight, width: this.refs.timeline.clientWidth })
  }

  render () {
    const { width, height } = this.state
    return (
      <div className='timeline-container row'>
        <div className='col-3'>
          <Buttons />
        </div>
        <div className='col-9 p-0' ref='timeline'>
          <TimelineEditor height={height} width={width} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Timeline)
