import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { frameToggle } from 'reducers/control/control.actions'
import { setMainProp } from 'reducers/objects/objects.actions'

const ObjectName = (props) => {
  const { index, item } = props
  const onChange = e => setMainProp(item.id, { name: e.target.value })
  return (
    <div className='name'>
      <div className='open-button'>
        <Icon type='caret-right' onClick={() => frameToggle(item.id)} />
      </div>
      <i className='index'>{index}</i>
      <div className='editor'><input type='text' value={item.name} onChange={onChange} /></div>
    </div>
  )
}

ObjectName.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default ObjectName
