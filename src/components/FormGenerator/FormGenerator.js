import React from 'react'
import PropTypes from 'prop-types'
import { getClassNames } from 'dynamic-class-list'

import InputGenerator from './InputGenerator'

const FormGenerator = (props) => {
  const { schema, values, className } = props
  return (
    <div className={getClassNames(['generated-form', className])}>
      {schema.map(item =>
        <InputGenerator key={item.key} item={item} value={values[item.key]} className={className} />)}
    </div>
  )
}

FormGenerator.propTypes = {
  className: PropTypes.string,
  schema: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object.isRequired
}

export default FormGenerator
