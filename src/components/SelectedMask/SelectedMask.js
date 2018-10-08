import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MaskParams from './MaskParams'

const SelectedMask = (props) => {
  const { selected, masks } = props
  const mask = masks[selected]
  return (
    <div>
      <MaskParams />
    </div>
  )
}

SelectedMask.propTypes = {
  masks: PropTypes.object,
  selected: PropTypes.string
}

const mapStateToProps = state => ({
  masks: state.masks
})
export default connect(mapStateToProps)(SelectedMask)
