import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd'
import { nextFrame, prevFrame } from 'reducers/objects/objects.actions'

const KeyframesControl = (props) => {
  const { keyframes } = props
  if (!keyframes) return <div className='keyframes-control' />
  return (
    <div className='keyframes-control'>
      <Icon type='caret-left' theme='filled' onClick={() => prevFrame(keyframes.keys)} />
      <Icon type='caret-right' theme='filled' onClick={() => nextFrame(keyframes.keys)} />
    </div>
  )
}

KeyframesControl.propTypes = {}

export default KeyframesControl
