import React from 'react'
import PropTypes from 'prop-types'

import ScaleSelector from './ScaleSelector'
import CanvasSize from './CanvasSize'

const Controls = () => {
  return (
    <div className='canvas-controls'>
      <ScaleSelector />
      <CanvasSize />
    </div>
  )
}

Controls.propTypes = {}

export default Controls
