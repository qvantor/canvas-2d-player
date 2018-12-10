import React from 'react'
import PropTypes from 'prop-types'

import File from './File/File'

const TopMenu = (props) => {
  return (
    <div className='top-menu border-bottom border-dark'>
      <File />
      <span className='menu-item'>Edit</span>
    </div>
  )
}

TopMenu.propTypes = {}
TopMenu.defaultProps = {}

export default TopMenu
