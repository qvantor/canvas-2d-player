import React from 'react'
import { connect } from 'react-redux'
import ObjectsList from '../Objects/ObjectsList'

import 'reducers/masks/masks.actions'

const Mask = (props) => {
  const { id, masks } = props

  return (<group id={id} params={masks[id].params}>
    <ObjectsList objects={masks[id].children} />
  </group>)
}

const mapStateToProps = state => ({
  masks: state.masks
})
export default connect(mapStateToProps)(Mask)
