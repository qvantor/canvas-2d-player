import React from 'react'
import PropTypes from 'prop-types'

import { createCanvas, canvas } from 'canvas/container'

class Canvas extends React.Component {
  shouldComponentUpdate (nextProps) {
    canvas.setSize(nextProps)
    return false
  }

  render () {
    return (
      <div className='canvas'>
        <canvas id='help-canvas' />
        <canvas
          width={1000}
          height={1000}
          ref={el => createCanvas({ el })} />
      </div>
    )
  }
}

Canvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default Canvas
