import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const DnDEnter = (props) => {
  const { enter, id } = props
  if (!enter || id !== enter.id) return null
  return (<div className='drag-enter-above' />)
}

DnDEnter.propTypes = {}

const mapStateToProps = state => ({
  enter: state.control.dragEnter
})
export default connect(mapStateToProps)(DnDEnter)
