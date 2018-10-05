import React from 'react'

import Tools from '../Tools/Tools'
import Objects from '../Objects/Objects'

const LeftMenu = (props) => {
  return (
    <div className='left-menu bg-clouds'>
      <Objects />
      <span style={{ fontSize: 11 }}>Tools</span>
      <Tools />
    </div>
  )
}

export default LeftMenu
