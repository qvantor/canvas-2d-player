import React from 'react'
import PropTypes from 'prop-types'

import Objects from './Objects'

const Layers = (props) => {
  const { height, scale, width, rightWidth } = props
  return (
    <div className='timeline-layers'>
      <Objects height={height} scale={scale} width={width} rightWidth={rightWidth} />
    </div>
  )
}

Layers.propTypes = {
  height: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  rightWidth: PropTypes.number.isRequired
}

export default Layers
