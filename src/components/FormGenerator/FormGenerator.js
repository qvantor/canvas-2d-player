import React from 'react'
import PropTypes from 'prop-types'
import { getClassNames } from 'dynamic-class-list'

import Number from './Number'
import Color from './Color'
import Select from './Select'
import Checkbox from './Checkbox'

const FormGenerator = (props) => {
  const { schema, values, className } = props
  const types = { Number, Color, Select, Checkbox }
  return (
    <div className={getClassNames(['generated-form', className])}>
      {schema.map(item => {
        const Type = types[item.type]
        const field = (<Type item={item} value={values[item.key]} />)
        return (<div key={item.key} className='generated-form-field'>
          {item.render ? item.render(field, item) : field}
        </div>)
      })}
    </div>
  )
}

FormGenerator.propTypes = {
  className: PropTypes.string,
  schema: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object.isRequired
}

export default FormGenerator
