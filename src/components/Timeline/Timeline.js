import React, { Component } from 'react'
import { connect } from 'react-redux'

import Buttons from './Buttons'
import Controls from './Controls'
import TimelineEditor from './TimelineEditor'

class Timeline extends Component {
  state = { width: 0, height: 0 }

  componentDidMount () {
    this.setState({ height: this.refs.timeline.clientHeight, width: this.refs.timeline.clientWidth })
  }

  render () {
    // @todo put TimelineEditor and Controls together
    const { width, height } = this.state
    return (
      <div className='timeline-container'>
        <div className='scroll-y row'>
          <div className='col-3 pr-0'>
            <div className='static'>
              <Buttons />
            </div>
            <Controls />
          </div>
          <div className='col-9 p-0' ref='timeline'>
            <TimelineEditor height={height} width={width} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Timeline)
