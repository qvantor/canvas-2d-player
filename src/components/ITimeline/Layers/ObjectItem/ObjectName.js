import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { frameToggle } from 'reducers/control/control.actions'

const ObjectName = (props) => {
  const { index, item } = props
  return (
    <div className='name'>
      <div className='open-button'>
        <Icon type='caret-right' onClick={() => frameToggle(item.id)} />
      </div>
      <i className='index'>{index}</i>
      <span>{item.name}</span>
    </div>
  )
}

ObjectName.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default ObjectName
