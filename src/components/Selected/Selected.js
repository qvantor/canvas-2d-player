import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { typeById, types } from 'utils'

import SelectedObject from '../SelectedObject/SelectedObject'
import SelectedMask from '../SelectedMask/SelectedMask'

const Selected = (props) => {
  const { selection } = props
  if (!selection || selection.length !== 1) return null
  const selected = selection[0]
  const selectedType = typeById(selected)
  if (selectedType === types.OBJECT) return <SelectedObject selected={selected} />
  if (selectedType === types.MASK) return <SelectedMask selected={selected} />
  return null
}

Selected.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => ({
  selection: state.control.selection
})
export default connect(mapStateToProps)(Selected)
