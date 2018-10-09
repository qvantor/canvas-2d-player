import React from 'react'
import PropTypes from 'prop-types'
import Select from 'antd/lib/select'

const { Option } = Select

const SelectField = (props) => {
  const { item, value } = props
  return (
    <Select
      size='small'
      onChange={e => item.onChange(e, item)}
      defaultValue={value}
      style={{ width: '100%' }}>
      {item.options.map(item => <Option key={item} value={item}>{item}</Option>)}
    </Select>
  )
}

SelectField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  item: PropTypes.object
}

export default SelectField
