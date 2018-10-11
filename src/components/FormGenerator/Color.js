import React from 'react'
import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'
import { Popover } from 'antd'

const Color = (props) => {
  const { item, value } = props
  const onChange = ({ rgb }) => item.onChange(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`, item)

  return (<Popover
    content={
      <SketchPicker
        onChangeComplete={onChange}
        color={value}
      />}
    trigger='click'
    placement='rightBottom'>
    <div className='color-picker border rounded'>
      <div className='color-picker-background' style={{ background: value }} />
      <div className='color-picker-background-absolute' />
    </div>
  </Popover>)
}

Color.propTypes = {
  value: PropTypes.string,
  item: PropTypes.object
}

export default Color
