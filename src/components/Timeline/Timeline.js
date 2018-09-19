import React, { Component } from 'react'
import { connect } from 'react-redux'

import Buttons from './Buttons'

class Timeline extends Component {
  render () {

    return (
      <div className='timeline-container'>
        <Buttons />
      </div>
    )
  }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Timeline)
