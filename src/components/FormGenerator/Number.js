import React from 'react'
import PropTypes from 'prop-types'
import InputNumber from 'antd/lib/input-number'

const Number = (props) => {
  const { item, value } = props

  return (<InputNumber
    size='small'
    max={item.max || Number.MAX_SAFE_INTEGER}
    value={value}
    min={item.min || Number.MIN_SAFE_INTEGER}
    step={item.step || 1}
    style={{ width: '100%' }}
    onChange={e => item.onChange(e, item)} />)
}

Number.propTypes = {
  value: PropTypes.number,
  item: PropTypes.object
}

export default Number
