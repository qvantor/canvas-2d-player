import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getClassNames } from 'dynamic-class-list'
import { select } from 'reducers/control/control.actions'

const ImageItem = (props) => {
  const { image, isSelected } = props
  return (
    <div
      onClick={() => select([image.id])}
      className={getClassNames('image-item border rounded p-1 m-1 d-inline-flex', {
        selected: isSelected,
        'bg-white': !isSelected
      })}>
      <img src={image.url} className='item-img' />
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  isSelected: PropTypes.bool
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(ImageItem)
