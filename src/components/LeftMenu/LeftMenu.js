import React from 'react'

import Tools from '../Tools/Tools'
import Objects from '../Objects/Objects'
import AppColors from '../AppColors/AppColors'

const LeftMenu = () => {
  return (
    <div className='left-menu border-right border-dark bg-clouds'>
      <Objects />
      <Tools />
      <AppColors />
    </div>
  )
}

export default LeftMenu
