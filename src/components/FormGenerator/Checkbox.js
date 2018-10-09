import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'antd/lib/checkbox'

const CheckboxField = (props) => {
  const { item, value } = props
  return (
    <Checkbox
      checked={value}
      onChange={e => item.onChange(e.target.checked, item)} />
  )
}

CheckboxField.propTypes = {
  value: PropTypes.bool,
  item: PropTypes.object
}

export default CheckboxField
