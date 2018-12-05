import React from 'react'
import PropTypes from 'prop-types'
import InputNumber from 'antd/lib/input-number'
import { getClassNames } from 'dynamic-class-list'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

class DraggableNumber extends React.Component {
  state = { selected: false }

  onNumberClick = () => {
    if (this.state.selected) return
    document.addEventListener('click', this.onOutsideClick)
    this.setState({ selected: true })
  }

  onOutsideClick = (e) => {
    if (this.refs.number.contains(e.target)) return
    document.removeEventListener('click', this.onOutsideClick)
    this.setState({ selected: false })
  }

  componentWillUnmount () {
    if (this.state.selected) document.removeEventListener('click', this.onOutsideClick)
  }

  render () {
    const { item, value } = this.props
    const { selected } = this.state
    const step = item.step || 1
    const max = item.max === undefined ? Number.MAX_SAFE_INTEGER : item.max
    const min = item.min === undefined ? Number.MIN_SAFE_INTEGER : item.min
    const roundOn = 1 / step

    return (<div
      className={getClassNames('draggable-number', { selected })}
      ref='number'
      onClick={this.onNumberClick}>
      {selected
        ? <InputNumber
          size='small'
          max={max}
          value={value}
          min={min}
          step={step}
          style={{ width: '100%' }}
          onChange={e => item.onChange(e, item)} />
        : <div
          className='number'
          ref={el => select(el).call(drag()
            .on('drag', () => {
              const val = mouse(this.refs.number)[0] * step
              let newVal = Math.round((value + val) * roundOn) / roundOn
              if (newVal > max) newVal = max
              if (newVal < min) newVal = min

              item.onChange(newVal, item)
            })
          )}>{value}</div>}
    </div>)
  }
}

DraggableNumber.propTypes = {
  value: PropTypes.number,
  item: PropTypes.object
}

export default DraggableNumber
