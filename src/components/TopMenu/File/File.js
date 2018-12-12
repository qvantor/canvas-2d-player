import React from 'react'

import { Menu, Dropdown } from 'antd'

import { openSettings } from 'reducers/control/control.actions'
import { menuViews } from 'utils'

const File = () => {
  const newProject = () => {
    localStorage.setItem('redux', '{}')
    location.reload()
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={newProject}>
        New Project
      </Menu.Item>
      <Menu.Item>
        Save project
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={() => openSettings(menuViews.PROJECT_SETTINGS)}>
        Settings
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']} overlayClassName='top-menu-dropdown'>
      <span className='menu-item'>File</span>
    </Dropdown>
  )
}

export default File
