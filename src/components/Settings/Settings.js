import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { closeSettings } from 'reducers/control/control.actions'
import { menuViews } from 'utils'
import ProjectSettings from './ProjectSettings/ProjectSettings'

const Settings = (props) => {
  const { open, view } = props
  if (!open) return null
  const views = {
    [menuViews.PROJECT_SETTINGS]: ProjectSettings
  }
  const Page = views[view]
  return (
    <div className='settings-modal'>
      <div className='settings-header'>
        Preferences
        <div className='right-toolbar float-right'>
          <Icon type='close' className='c-pointer' onClick={closeSettings} />
        </div>
      </div>
      <div className='settings-body'>
        {Page && <Page />}
      </div>
    </div>
  )
}

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  view: PropTypes.string
}

const mapStateToProps = state => ({
  open: state.control.settings.open,
  view: state.control.settings.view
})
export default connect(mapStateToProps)(Settings)
