import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Canvas from './Canvas'
import Controls from './Controls/Controls'

class CanvasScaled extends React.Component {
  render () {
    const { width, height, resolution, viewScale } = this.props
    const padding = 30
    let scaleX = (width - (padding * 2)) / resolution[0]
    let scaleY = (height - (padding * 2)) / resolution[1]
    let scale = scaleX > scaleY ? scaleY : scaleX
    scale = scale < 1 ? scale : 1
    scale = viewScale || scale

    const scaledWidth = Math.round(resolution[0] * scale)
    const scaledHeight = Math.round(resolution[1] * scale)
    const originX = (width - scaledWidth) / 2
    const originY = (height - scaledHeight) / 2

    let containerPadding = `${originY - 1}px ${originX - 1}px` // -1 because of borders
    let overflow
    if (scaledWidth > width || scaledHeight > height) {
      containerPadding = 0
      overflow = 'scroll'
    }

    return (
      <div className='canvas-scale-container' style={{ width, height, padding: containerPadding }}>
        <div className='unscaled-canvas border border-dark' style={{ overflow }}>
          <div
            style={{
              width: resolution[0],
              height: resolution[1],
              transform: `scale(${scale})`,
              transformOrigin: `0px 0px`
            }}
            className='canvas'>
            <Canvas resolution={resolution} />
          </div>
        </div>
        <Controls />
      </div>
    )
  }
}

CanvasScaled.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  resolution: PropTypes.arrayOf(PropTypes.number).isRequired,
  viewScale: PropTypes.number
}

const mapStateToProps = state => ({
  resolution: state.project.resolution,
  viewScale: state.control.viewScale
})
export default connect(mapStateToProps)(CanvasScaled)
