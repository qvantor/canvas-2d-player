import React from 'react'
import PropTypes from 'prop-types'
import FormGenerator from '../FormGenerator/FormGenerator'
import { renderField } from '../FormGenerator/Rows'

import { setMaskParams } from 'reducers/masks/masks.actions'

const MaskParams = (props) => {
  const { mask: { params, id } } = props
  const onChange = (e, item) => setMaskParams(id, { [item.key]: e })
  const maskSchema = [{
    type: 'Checkbox',
    name: 'Absolute position',
    key: 'absolutePositioned',
    onChange,
    render: renderField
  }, {
    type: 'Checkbox',
    name: 'Inverted',
    key: 'inverted',
    onChange,
    render: renderField
  }]
  return (<FormGenerator schema={maskSchema} values={params} />)
}

MaskParams.propTypes = {
  mask: PropTypes.object
}

export default MaskParams
