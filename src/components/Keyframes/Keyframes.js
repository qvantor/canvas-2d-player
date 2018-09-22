import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'

import { addKeyFrameParam, removeKeyFrameParam, nextFrame, prevFrame } from 'reducers/objects/objects.actions'

class Keyframes extends Component {
  render () {
    const {keyframes, param, id} = this.props
    const keying = keyframes[param] !== undefined

    return (
      <div className='d-inline keyframes mr-1'>
        {keying
          ? <Button.Group size='small'>
            <Button
              onClick={() => prevFrame(keyframes[param].keys)}
              icon='left'
              type='primary'
              ghost />
            <Button
              onClick={() => removeKeyFrameParam(id, param)}
              icon='clock-circle'
              type='primary'
              ghost />
            <Button
              onClick={() => nextFrame(keyframes[param].keys)}
              icon='right'
              type='primary'
              ghost />
          </Button.Group>
          : <Button
            size='small'
            className='text-color-concrete'
            icon='clock-circle'
            onClick={() => addKeyFrameParam(id, param)}
            ghost />}
      </div>
    )
  }
}

Keyframes.propTypes = {
  keyframes: PropTypes.object.isRequired,
  param: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Keyframes
