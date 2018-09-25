import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'antd/lib/checkbox'
import { setParams } from 'reducers/objects/objects.actions'
import InputNumber from 'antd/lib/input-number'

class Shadow extends Component {
  render () {
    const {obj: {params, id}} = this.props
    const shadowOn = params.shadow !== undefined

    const shadowParams = {
      blur: 10,
      offsetX: 0,
      offsetY: 0,
      affectStroke: true,
      color: '#000000'
    }

    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>Shadow</div>
          <div className='col-md-6'>
            <Checkbox
              checked={shadowOn}
              onChange={e => {
                if (e.target.checked) setParams(id, {shadow: shadowParams})
                else setParams(id, {shadow: undefined})
              }} />
          </div>
        </div>
        {shadowOn &&
        <div>
          <div className='row'>
            <div className='col-md-6'>Blur</div>
            <div className='col-md-6'>
              <InputNumber
                style={{width: '100%'}}
                min={0}
                value={params.shadow.blur}
                onChange={e => setParams(id, {shadow: {blur: e}})} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>OffsetX</div>
            <div className='col-md-6'>
              <InputNumber
                style={{width: '100%'}}
                value={params.shadow.offsetX}
                onChange={e => setParams(id, {shadow: {offsetX: e}})} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>OffsetY</div>
            <div className='col-md-6'>
              <InputNumber
                style={{width: '100%'}}
                value={params.shadow.offsetY}
                onChange={e => setParams(id, {shadow: {offsetY: e}})} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>Color</div>
            <div className='col-md-6'>
              <input
                value={params.shadow.color}
                onChange={({target}) => setParams(id, {shadow: {color: target.value}})}
                type='color' />
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

Shadow.propTypes = {
  obj: PropTypes.object.isRequired
}

export default Shadow
