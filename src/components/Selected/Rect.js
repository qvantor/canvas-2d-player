import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { setParams } from 'reducers/objects/objects.actions'

class Rect extends Component {
  render () {
    const { obj: { params, id } } = this.props

    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>Fill</div>
          <div className='col-md-6'>
            <input
              value={params.fill}
              onChange={({ target }) => setParams(id, { fill: target.value })}
              type='color' />
          </div>
        </div>
      </div>
    )
  }
}

Rect.propTypes = {
  obj: PropTypes.object
}

export default Rect
