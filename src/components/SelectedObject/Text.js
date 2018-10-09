import React from 'react'
import PropTypes from 'prop-types'
import FormGenerator from '../FormGenerator/FormGenerator'
import { renderField } from '../FormGenerator/Rows'

import { setParams } from 'reducers/objects/objects.actions'

const Text = (props) => {
  const { obj } = props
  const onChange = (e, item) => setParams(obj.id, { [item.key]: e })
  const textSchema = [{
    type: 'Color',
    name: 'Color',
    key: 'fill',
    onChange,
    render: renderField
  }, {
    type: 'Select',
    name: 'Font',
    key: 'fontFamily',
    options: ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Palatino'],
    onChange,
    render: renderField
  }, {
    type: 'Number',
    name: 'Font size',
    key: 'fontSize',
    min: 0,
    onChange,
    render: renderField
  }, {
    type: 'Select',
    name: 'Font weigth',
    key: 'fontWeight',
    options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    onChange,
    render: renderField
  }]

  return (<FormGenerator schema={textSchema} values={obj.params} />)
}

Text.propTypes = {
  obj: PropTypes.object,
  renderField: PropTypes.func
}

export default Text
