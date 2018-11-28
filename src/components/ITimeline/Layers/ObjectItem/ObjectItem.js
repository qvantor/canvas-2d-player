import React from 'react'
import PropTypes from 'prop-types'

import ControlButtons from './ControlButtons'

const ObjectItem = (props) => {
  const { item, index } = props
  return (
    <div className='object'>
      <div className='object-line'>
        <ControlButtons item={item} />
        <div className='name'>
          <i className='index'>{index}</i>
          <span>{item.name}</span>
        </div>
      </div>
    </div>
  )
}

ObjectItem.propTypes = {}
ObjectItem.defaultProps = {}

export default ObjectItem
