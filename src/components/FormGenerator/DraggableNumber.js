import React from 'react'
import PropTypes from 'prop-types'
import InputNumber from 'antd/lib/input-number'
import { getClassNames } from 'dynamic-class-list'

import * as formatters from './valueFormatter'

class DraggableNumber extends React.Component {
  state = { selected: false }
  calc = {}
  initialPosition = null
  dragged = false

  onNumberClick = () => {
    if (this.state.selected || this.dragged) return
    document.addEventListener('click', this.onOutsideClick)
    this.setState({ selected: true })
  }

  onOutsideClick = (e) => {
    if (this.refs.number.contains(e.target)) return
    document.removeEventListener('click', this.onOutsideClick)
    this.setState({ selected: false })
  }

  onMouseDown = (e) => {
    this.dragged = false
    this.initialPosition = e.nativeEvent.clientX
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('mouseup', this.onMouseUp)
  }

  onMouseMove = (e) => {
    const { item, value } = this.props
    const { max, min, roundOn, step } = this.calc
    const val = (e.clientX - this.initialPosition) * step
    let newVal = Math.round((value + val) * roundOn) / roundOn
    if (newVal > max) newVal = max
    if (newVal < min) newVal = min

    item.onChange(newVal, item)
    this.initialPosition = e.clientX
    this.dragged = true
  }

  onMouseUp = () => {
    this.initialPosition = null
    window.removeEventListener('mousemove', this.onMouseMove)
    window.addEventListener('mouseup', this.onMouseUp)
  }

  componentWillUnmount () {
    if (this.state.selected) document.removeEventListener('click', this.onOutsideClick)
  }

  render () {
    const { item, value } = this.props
    const { selected } = this.state
    this.calc.step = item.step || 1
    this.calc.max = item.max === undefined ? Number.MAX_SAFE_INTEGER : item.max
    this.calc.min = item.min === undefined ? Number.MIN_SAFE_INTEGER : item.min
    this.calc.roundOn = 1 / this.calc.step
    const formatter = item.formatter ? formatters[item.formatter] : formatters.numStandard

    return (<div
      className={getClassNames('draggable-number', { selected })}
      ref='number'
      onClick={this.onNumberClick}>
      {selected
        ? <InputNumber
          size='small'
          max={this.calc.max}
          value={value}
          min={this.calc.min}
          step={this.calc.step}
          style={{ width: '100%' }}
          formatter={formatter.formatter}
          parser={formatter.parser}
          onChange={e => item.onChange(e, item)} />
        : <div
          className='number'
          onMouseDown={this.onMouseDown}>{formatter.formatter(value)}</div>}
    </div>)
  }
}

DraggableNumber.propTypes = {
  value: PropTypes.number,
  item: PropTypes.object
}

export default DraggableNumber
