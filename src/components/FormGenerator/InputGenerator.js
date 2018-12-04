import React from 'react'
import PropTypes from 'prop-types'

import Number from './Number'
import Color from './Color'
import Select from './Select'
import Checkbox from './Checkbox'
import { getClassNames } from 'dynamic-class-list'

const InputGenerator = (props) => {
  const { item, className, value } = props
  const types = { Number, Color, Select, Checkbox }
  const Type = types[item.type]
  const field = (<Type item={item} value={value} />)
  return (
    <div className={getClassNames(['generated-form-field', className])}>
      {item.render ? item.render(field, item) : field}
    </div>
  )
}

InputGenerator.propTypes = {
  item: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  className: PropTypes.string
}

export default InputGenerator
