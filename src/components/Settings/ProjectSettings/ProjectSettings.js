import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Radio } from 'antd'

import { screenParams } from 'utils'
import { setSettings } from 'reducers/control/control.actions'

const ProjectSettings = (props) => {
  const setParams = (val) => {
    setSettings(val)
  }
  return (
    <div>
      <div className='row'>
        <div className='col-md-4'>
          <small className='d-block'>Screen aspect</small>
          <Radio.Group
            size='small'
            onChange={(e) => setParams({ aspect: e.target.value })}
            value={props.aspect}>
            {screenParams.aspect.map(item =>
              <Radio.Button value={item.value} key={item.value}>{item.value}</Radio.Button>)}
          </Radio.Group>
        </div>
        <div className='col-md-4'>
          <small className='d-block'>Resolution</small>
          <Radio.Group
            size='small'
            onChange={(e) => setParams({ resolution: e.target.value })}
            value={props.resolution}>
            {screenParams.resolution.map(item =>
              <Radio.Button value={item.label} key={item.label}>{item.label}</Radio.Button>)}
          </Radio.Group>
        </div>
        <div className='col-md-4'>
          <small className='d-block'>Orientation</small>
          <Radio.Group
            size='small'
            onChange={(e) => setParams({ orientation: e.target.value })}
            value={props.orientation}>
            {screenParams.orientation.map(item =>
              <Radio.Button value={item.value} key={item.value}>{item.label}</Radio.Button>)}
          </Radio.Group>
        </div>
      </div>
    </div>
  )
}

ProjectSettings.propTypes = {
  aspect: PropTypes.string,
  resolution: PropTypes.string,
  orientation: PropTypes.bool
}

const mapStateToProps = state => ({
  aspect: state.control.settings.aspect,
  resolution: state.control.settings.resolution,
  orientation: state.control.settings.orientation
})
export default connect(mapStateToProps)(ProjectSettings)
