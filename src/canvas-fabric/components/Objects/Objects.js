import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'reducers/objects/objects.actions'

import ObjectsList from './ObjectsList'

class Objects extends Component {
  render () {
    const { objects, tool } = this.props
    const tree = tool !== 'spline'
      ? <ObjectsList objects={objects} />
      : <group params={{ selectable: false, evented: false }}><ObjectsList objects={objects} /></group>
    return (
      <collection>
        {tree}
      </collection>
    )
  }
}

const mapStateToProps = state => ({
  objects: state.objects,
  tool: state.control.tool
})
export default connect(mapStateToProps)(Objects)
