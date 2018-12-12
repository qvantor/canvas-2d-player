import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { canvas, createCanvas } from 'canvas/container'

class Canvas extends Component {
  shouldComponentUpdate (nextProps) {
    canvas.setSize({ width: nextProps.resolution[0], height: nextProps.resolution[1] })
    return false
  }

  render () {
    const { resolution } = this.props

    return (<React.Fragment>
      <canvas id='help-canvas' />
      <canvas
        width={resolution[0]}
        height={resolution[1]}
        ref={el => createCanvas({ el })} />
    </React.Fragment>)
  }
}

Canvas.propTypes = {
  resolution: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Canvas
