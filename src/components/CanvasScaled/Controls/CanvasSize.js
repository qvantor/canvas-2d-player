import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CanvasSize = (props) => {
  const { resolution } = props
  return (
    <div className='canvas-size'>
      {resolution[0]}x{resolution[1]}
    </div>
  )
}

CanvasSize.propTypes = {
  resolution: PropTypes.arrayOf(PropTypes.number).isRequired
}

const mapStateToProps = state => ({
  resolution: state.project.resolution
})
export default connect(mapStateToProps)(CanvasSize)
