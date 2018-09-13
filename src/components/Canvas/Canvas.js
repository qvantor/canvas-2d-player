import React from 'react'
import PropTypes from 'prop-types'
import render from 'canvas-fabric/render'
import App from 'canvas-fabric/components/app.component'
import { store } from 'store'

import { canvas } from 'canvas-fabric/core/container'

class Canvas extends React.Component {
  shouldComponentUpdate (nextProps) {
    canvas.setWidth(nextProps.width)
    canvas.setHeight(nextProps.height)
    canvas.calcOffset()
    return false
  }

  render () {
    return (
      <canvas
        width={1000}
        height={1000}
        ref={el => render(<App store={store} />, el)} />
    )
  }
}

Canvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default Canvas
