import React from 'react'
import PropTypes from 'prop-types'
import FormGenerator from '../FormGenerator/FormGenerator'

import { setParams } from 'reducers/objects/objects.actions'
import { setMaskParams } from 'reducers/masks/masks.actions'
import { typeById, types } from 'utils'

const Position = (props) => {
  const { obj, renderWithKeyFrames } = props
  const onChange = (e, item) => {
    const type = typeById(obj.id)
    if (type === types.OBJECT) setParams(obj.id, { [item.key]: e })
    if (type === types.MASK) setMaskParams(obj.id, { [item.key]: e })
  }
  const positionSchema = [
    {
      type: 'DraggableNumber',
      key: 'opacity',
      name: 'Opacity',
      step: 0.01,
      min: 0,
      max: 1,
      onChange,
      render: renderWithKeyFrames,
      formatter: 'numPercents'
    },
    { type: 'DraggableNumber', name: 'Angle', key: 'angle', step: 0.1, onChange, render: renderWithKeyFrames },
    { type: 'DraggableNumber', name: 'Top', key: 'top', onChange, render: renderWithKeyFrames },
    { type: 'DraggableNumber', name: 'Left', key: 'left', onChange, render: renderWithKeyFrames },
    {
      type: 'DraggableNumber',
      key: 'scaleX',
      name: 'Scale X',
      step: 0.01,
      onChange,
      render: renderWithKeyFrames,
      formatter: 'numPercents'
    },
    {
      type: 'DraggableNumber',
      key: 'scaleY',
      name: 'Scale Y',
      step: 0.01,
      onChange,
      render: renderWithKeyFrames,
      formatter: 'numPercents'
    }]

  return (<FormGenerator schema={positionSchema} values={obj.params} />)
}

Position.propTypes = {
  obj: PropTypes.object,
  renderWithKeyFrames: PropTypes.func
}

export default Position
