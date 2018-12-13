import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ObjectItem from './ObjectItem/ObjectItem'

const Objects = (props) => {
  const { order, objects, rightWidth, scale, width, openFrames } = props
  return (
    <div className='timeline-objects border-top border-dark'>
      {order.map((key, index) => objects[key]
        ? <ObjectItem
          key={key}
          item={objects[key]}
          index={index}
          scale={scale}
          rightWidth={rightWidth}
          width={width}
          open={openFrames.indexOf(key) !== -1} />
        : null)}
    </div>
  )
}

Objects.propTypes = {
  rightWidth: PropTypes.number.isRequired,
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  objects: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  openFrames: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = state => ({
  order: state.objOrder,
  objects: state.objects,
  openFrames: state.control.openFrames
})
export default connect(mapStateToProps)(Objects)
