import React from 'react'
import PropTypes from 'prop-types'

const Color = (props) => {
  const { item, value } = props
  return (
    <input
      value={value}
      onChange={e => item.onChange(e.target.value, item)}
      type='color' />
  )
}

Color.propTypes = {
  value: PropTypes.string,
  item: PropTypes.object
}

export default Color
