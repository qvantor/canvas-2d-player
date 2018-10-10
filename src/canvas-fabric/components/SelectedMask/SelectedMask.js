import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ObjectsList from '../Objects/ObjectsList'
import { typeById } from 'utils'

const SelectedMask = (props) => {
  const { selection, masks } = props
  if (!selection) return null
  const selected = selection[0]
  const selectedType = typeById(selected)
  if (selectedType !== 'mask') return null
  return (
    <group
      id={masks[selected].id}
      params={masks[selected].params.merge({ opacity: 0.1 })}>
      <ObjectsList objects={masks[selected].children} />
    </group>)
}

SelectedMask.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string),
  masks: PropTypes.object
}

const mapStateToProps = state => ({
  selection: state.control.selection,
  masks: state.masks
})
export default connect(mapStateToProps)(SelectedMask)
