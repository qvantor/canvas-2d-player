import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createCanvas, canvas } from 'canvas/container'

class Canvas extends React.Component {
  shouldComponentUpdate (nextProps) {
    canvas.setSize({ width: nextProps.resolution[0], height: nextProps.resolution[1] })
    return true
  }

  render () {
    const { width, height, resolution } = this.props
    const paddingX = 30
    const paddingY = 20
    let scaleX = (width - (paddingX * 2)) / resolution[0]
    let scaleY = (height - (paddingY * 2)) / resolution[1]
    let scale = scaleX > scaleY ? scaleY : scaleX
    scale = scale < 1 ? scale : 1

    const scaledWidth = Math.round(resolution[0] * scale)
    const scaledHeight = Math.round(resolution[1] * scale)
    const originX = (width - scaledWidth) / 2
    const originY = (height - scaledHeight) / 2
    return (
      <div className='canvas-scale-container' style={{ width, height, padding: `${originY}px ${originX}px` }}>
        <div className='unscaled-canvas border border-dark'>
          <div
            style={{
              width: resolution[0],
              height: resolution[1],
              transform: `scale(${scale})`,
              transformOrigin: `0px 0px`
            }}
            className='canvas'>
            <canvas id='help-canvas' />
            <canvas ref={el => createCanvas({ el })} />
          </div>
        </div>
      </div>
    )
  }
}

Canvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  resolution: PropTypes.arrayOf(PropTypes.number).isRequired
}

const mapStateToProps = state => ({
  resolution: state.project.resolution
})
export default connect(mapStateToProps)(Canvas)
