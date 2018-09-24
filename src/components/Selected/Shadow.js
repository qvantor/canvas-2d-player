import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'antd/lib/checkbox'
import { setParams } from 'reducers/objects/objects.actions'

class Shadow extends Component {
  render () {
    const {obj: {params, id}} = this.props

    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>Shadow</div>
          <div className='col-md-6'>
            <Checkbox
              checked={params.shadow !== undefined}
              onChange={e => {
                if (e.target.checked) {
                  setParams(id, {
                    shadow: {
                      blur: 10,
                      offsetX: 0,
                      offsetY: 0,
                      affectStroke: true,
                      color: '#000000'
                    }
                  })
                } else {
                  setParams(id, {
                    shadow: undefined
                  })
                }
              }} />
          </div>
        </div>
      </div>
    )
  }
}

export default Shadow
