import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { viewScaleSet } from 'reducers/control/control.actions'

import { Select } from 'antd'

const { Option } = Select

const scaleOptions = [['100%', 1], ['75%', 0.75], ['50%', 0.5], ['25%', 0.25], ['auto', null]]

const ScaleSelector = (props) => {
  const { viewScale } = props
  return (
    <div className='scale-selector'>
      <Select
        onChange={viewScaleSet}
        dropdownClassName='scale-selector-dropdown'
        value={viewScale}
        defaultValue={viewScale}>
        {scaleOptions.map(item => <Option key={item[0]} value={item[1]}>{item[0]}</Option>)}
      </Select>
    </div>
  )
}

ScaleSelector.propTypes = {
  viewScale: PropTypes.number
}

const mapStateToProps = state => ({
  viewScale: state.control.viewScale
})
export default connect(mapStateToProps)(ScaleSelector)
