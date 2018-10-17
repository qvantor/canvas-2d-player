import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getClassNames } from 'dynamic-class-list'
import { select, dragStart, dragEnd } from 'reducers/control/control.actions'
import { types } from 'utils/'

const ImageItem = (props) => {
  const { image, isSelected } = props
  return (
    <div
      onClick={() => select([image.id])}
      className={getClassNames('image-item border rounded p-1 m-1 d-inline-flex', {
        selected: isSelected,
        'bg-white': !isSelected
      })}
      onDragStart={() => dragStart(types.DND_IMAGE, types.DND_TARGET_CANVAS, { imgId: image.id })}
      onDragEnd={dragEnd}
      draggable>
      <img src={image.url} className='item-img' draggable={false} />
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  isSelected: PropTypes.bool
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(ImageItem)
