import React from 'react'
import { Icon } from 'antd'

import File from './File/File'

const TopMenu = () => {
  return (
    <div className='top-menu border-bottom border-dark'>
      <File />
      <span className='menu-item'>Edit</span>
      <a
        href='https://github.com/qvantor/canvas-2d-player'
        target='_blank'
        className='float-right text-white menu-item'>
        <Icon type='github' /> Fork me on Github
      </a>
    </div>
  )
}
export default TopMenu
