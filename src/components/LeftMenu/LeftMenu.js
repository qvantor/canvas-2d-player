import React from 'react'

import Tools from '../Tools/Tools'
import Objects from '../Objects/Objects'

const LeftMenu = () => {
  return (
    <div className='left-menu border-right border-dark bg-clouds'>
      <Objects />
      <span style={{ fontSize: 11 }}>Tools</span>
      <Tools />
    </div>
  )
}

export default LeftMenu
