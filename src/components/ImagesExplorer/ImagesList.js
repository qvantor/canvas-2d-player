import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ImageItem from './ImageItem'

const ImagesList = (props) => {
  const { images, selection } = props
  return (
    <div className='images-list d-flex my-1'>
      {Object.keys(images).map(id =>
        <ImageItem
          isSelected={selection && selection[0] === id}
          key={id}
          image={images[id]} />)}
    </div>
  )
}

ImagesList.propTypes = {
  images: PropTypes.object.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => ({
  images: state.images,
  selection: state.control.selection
})
export default connect(mapStateToProps)(ImagesList)
