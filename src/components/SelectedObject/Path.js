import React from 'react'
import PropTypes from 'prop-types'
import FormGenerator from '../FormGenerator/FormGenerator'

import { setParams } from 'reducers/objects/objects.actions'
import { renderField } from '../FormGenerator/Rows'

const Path = (props) => {
  const { obj } = props
  const onChange = (e, item) => setParams(obj.id, { [item.key]: e })
  const pathSchema = [{ type: 'Color', name: 'Color', key: 'fill', onChange, render: renderField }]

  return (<FormGenerator schema={pathSchema} values={obj.params} />)
}

Path.propTypes = {
  obj: PropTypes.object
}

export default Path
