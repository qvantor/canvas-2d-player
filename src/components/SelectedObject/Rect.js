import React from 'react'
import PropTypes from 'prop-types'
import FormGenerator from '../FormGenerator/FormGenerator'
import { renderField } from '../FormGenerator/Rows'

import { setParams } from 'reducers/objects/objects.actions'

const Rect = props => {
  const { obj: { params, id } } = props
  const onChange = (e, item) => setParams(id, { [item.key]: e })
  const rectSchema = [
    { type: 'Color', name: 'Color', key: 'fill', onChange, render: renderField },
    { type: 'DraggableNumber', name: 'Width', key: 'width', onChange, render: renderField },
    { type: 'DraggableNumber', name: 'Height', key: 'height', onChange, render: renderField }]

  return (<FormGenerator schema={rectSchema} values={params} />)
}

Rect.propTypes = {
  obj: PropTypes.object
}

export default Rect
