import React from 'react'
import { connect } from 'react-redux'

import ObjectsList from './ObjectsList'

const Objects = (props) => {
  const { objects, tool } = props
  return tool !== 'spline'
    ? <ObjectsList objects={objects} />
    : <group params={{ selectable: false, evented: false }}><ObjectsList objects={objects} /></group>
}

const mapStateToProps = state => ({
  objects: state.objects,
  tool: state.control.tool
})
export default connect(mapStateToProps)(Objects)
