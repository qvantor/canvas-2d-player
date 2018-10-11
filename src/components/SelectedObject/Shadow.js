import React from 'react'
import PropTypes from 'prop-types'
import { setParams } from 'reducers/objects/objects.actions'
import FormGenerator from '../FormGenerator/FormGenerator'
import { renderField } from '../FormGenerator/Rows'

const Shadow = props => {
  const { obj: { params, id } } = props
  const shadowOn = params.shadow !== undefined
  const shadowParams = {
    blur: 10,
    offsetX: 0,
    offsetY: 0,
    affectStroke: true,
    color: '#000000'
  }
  const onChange = (e, item) => setParams(id, { shadow: { [item.key]: e } })
  const shadowSchema = [{
    type: 'Checkbox',
    name: 'Shadow',
    key: 'shadow',
    onChange: e => e ? setParams(id, { shadow: shadowParams }) : setParams(id, { shadow: undefined }),
    render: renderField
  }]
  const shadowParamsSchema = [
    { type: 'Color', name: 'Color', key: 'color', onChange, render: renderField },
    { type: 'Number', name: 'Blur', key: 'blur', min: 0, onChange, render: renderField },
    { type: 'Number', key: 'offsetX', name: 'Offset X', onChange, render: renderField },
    { type: 'Number', key: 'offsetY', name: 'Offset Y', onChange, render: renderField }]

  return (
    <div>
      <FormGenerator schema={shadowSchema} values={{ shadow: shadowOn }} />
      {shadowOn && <FormGenerator schema={shadowParamsSchema} values={params.shadow} />}
    </div>
  )
}

Shadow.propTypes = {
  obj: PropTypes.object.isRequired
}

export default Shadow
