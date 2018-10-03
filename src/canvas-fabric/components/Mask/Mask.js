import React from 'react'
import { connect } from 'react-redux'
import ObjectsList from '../Objects/ObjectsList'

import 'reducers/masks/masks.actions'

const Mask = (props) => {
  const { masks } = props

  return Object.keys(masks).map(id =>
    <mask id={id} key={id} params={masks[id].params}>
      <ObjectsList objects={masks[id].children} />
    </mask>)
}

const mapStateToProps = state => ({
  masks: state.masks
})
export default connect(mapStateToProps)(Mask)
