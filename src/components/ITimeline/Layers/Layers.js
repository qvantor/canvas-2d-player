import React from 'react'
import PropTypes from 'prop-types'

import Objects from './Objects'
import connect from 'react-redux/es/connect/connect'
import * as types from 'utils/types'
import { objReorder } from 'reducers/objOrder/objOrder.actions'

const Layers = (props) => {
  const { height, scale, width, rightWidth, drag } = props

  const onDrop = () => objReorder({ objId: drag.data.id, last: true })

  return (
    <div
      onDragOver={e => drag.target === types.DND_TIMELINE_OBJECT && e.preventDefault()}
      onDrop={onDrop}
      className='timeline-layers'
      style={{ height }}>
      <Objects height={height} scale={scale} width={width} rightWidth={rightWidth} />
    </div>
  )
}

Layers.propTypes = {
  height: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  rightWidth: PropTypes.number.isRequired,
  drag: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  drag: state.control.drag
})
export default connect(mapStateToProps)(Layers)
