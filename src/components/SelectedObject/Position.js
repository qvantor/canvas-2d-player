import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputNumber from 'antd/lib/input-number'
import Keyframes from '../Keyframes/Keyframes'

import { setParams } from 'reducers/objects/objects.actions'

class Position extends Component {

  render () {
    const { obj } = this.props

    const positionParams = ['angle', 'top', 'left', 'scaleX', 'scaleY']

    return (
      <div>
        {positionParams.map(item =>
          <div className='row' key={item}>
            <div className='col-md-6'>
              <Keyframes param={item} keyframes={obj.keyframes} id={obj.id} />
              {item}
            </div>
            <div className='col-md-6'>
              <InputNumber
                size='small'
                style={{ width: '100%' }}
                value={obj.params[item]}
                onChange={e => setParams(obj.id, { [item]: e })} />
            </div>
          </div>)}
      </div>
    )
  }
}

Position.propTypes = {
  obj: PropTypes.object
}

export default Position
