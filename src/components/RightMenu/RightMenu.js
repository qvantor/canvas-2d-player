import React from 'react'

import Selected from '../Selected/Selected'
import Explorers from '../Explorers/Explorers'

const RightMenu = () => {
  return (
    <div className='right-menu border-left border-dark bg-clouds'>
      <div className='selected-params'>
        <Selected />
      </div>
      <Explorers />
    </div>
  )
}

export default RightMenu
