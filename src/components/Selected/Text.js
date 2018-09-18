import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'antd/lib/select'
import InputNumber from 'antd/lib/input-number'

import { setParams } from 'reducers/objects/objects.actions'

const { Option } = Select

class Text extends Component {
  render () {
    const { obj } = this.props
    const fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Palatino']
    const weight = [100, 200, 300, 400, 500, 600, 700, 800, 900]
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>Fill</div>
          <div className='col-md-6'>
            <input
              value={obj.params.fill}
              onChange={({ target }) => setParams(obj.id, { fill: target.value })}
              type='color' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>Font</div>
          <div className='col-md-6'>
            <Select
              onChange={e => setParams(obj.id, { fontFamily: e })}
              defaultValue={obj.params.fontFamily}
              style={{ width: '100%' }}>
              {fonts.map(item => <Option key={item} value={item}>{item}</Option>)}
            </Select>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>Font size</div>
          <div className='col-md-6'>
            <InputNumber
              style={{ width: '100%' }}
              min={1} max={1000}
              defaultValue={obj.params.fontSize}
              onChange={e => setParams(obj.id, { fontSize: e })} />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>Font weigth</div>
          <div className='col-md-6'>
            <Select
              onChange={e => setParams(obj.id, { fontWeight: e })}
              defaultValue={obj.params.fontWeight}
              style={{ width: '100%' }}>
              {weight.map(item => <Option key={item} value={item}>{item}</Option>)}
            </Select>
          </div>
        </div>
      </div>
    )
  }
}

Text.propTypes = {
  obj: PropTypes.object
}

export default Text
