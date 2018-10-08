import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'antd/lib/checkbox'

import { setMaskParams } from 'reducers/masks/masks.actions'

const MaskParams = (props) => {
  const { mask: { params, id } } = props
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>Absolute position</div>
        <div className='col-md-6'>
          <Checkbox
            checked={params.absolutePositioned}
            onChange={e => {
              setMaskParams(id, { absolutePositioned: e.target.checked })
            }} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>Inverted</div>
        <div className='col-md-6'>
          <Checkbox
            checked={params.inverted}
            onChange={e => {
              setMaskParams(id, { inverted: e.target.checked })
            }} />
        </div>
      </div>
    </div>
  )
}

MaskParams.propTypes = {
  mask: PropTypes.object
}

export default MaskParams
