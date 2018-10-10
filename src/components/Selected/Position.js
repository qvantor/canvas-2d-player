import React from 'react'
import PropTypes from 'prop-types'
import FormGenerator from '../FormGenerator/FormGenerator'

import { setParams } from 'reducers/objects/objects.actions'
import { setMaskParams } from 'reducers/masks/masks.actions'
import { typeById } from 'utils'

const Position = (props) => {
  const { obj, renderWithKeyFrames } = props
  const onChange = (e, item) => {
    const type = typeById(obj.id)
    if (type === 'object') setParams(obj.id, { [item.key]: e })
    if (type === 'mask') setMaskParams(obj.id, { [item.key]: e })
  }
  const positionSchema = [
    { type: 'Number', name: 'Angle', key: 'angle', step: 0.1, onChange, render: renderWithKeyFrames },
    { type: 'Number', name: 'Top', key: 'top', onChange, render: renderWithKeyFrames },
    { type: 'Number', name: 'Left', key: 'left', onChange, render: renderWithKeyFrames },
    { type: 'Number', key: 'scaleX', name: 'Scale X', step: 0.1, onChange, render: renderWithKeyFrames },
    { type: 'Number', key: 'scaleY', name: 'Scale Y', step: 0.1, onChange, render: renderWithKeyFrames }]

  return (<FormGenerator schema={positionSchema} values={obj.params} />)
}

Position.propTypes = {
  obj: PropTypes.object,
  renderWithKeyFrames: PropTypes.func
}

export default Position
