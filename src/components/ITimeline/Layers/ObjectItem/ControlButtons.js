import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { getClassNames } from 'dynamic-class-list'
import { toggleLockObj } from 'reducers/objects/objects.actions'

const ControlButtons = (props) => {
  const { item } = props
  const controls = [
    { click: toggleLockObj, icon: 'lock', key: 'locked' },
    { click: () => {}, icon: 'eye', key: 'visible' }
  ]
  return (
    <div className='control-buttons'>
      {controls.map(value =>
        <div
          onClick={() => value.click(item)}
          className={getClassNames('control', { active: item.params[value.key] })}
          key={value.key}>
          <Icon type={value.icon} theme='filled' />
        </div>)}
    </div>
  )
}

ControlButtons.propTypes = {}

export default ControlButtons
