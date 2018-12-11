import React from 'react'
import PropTypes from 'prop-types'

import ScaleSelector from './ScaleSelector'

const Controls = () => {
  return (
    <div className='canvas-controls'>
      <ScaleSelector />
    </div>
  )
}

Controls.propTypes = {}

export default Controls
