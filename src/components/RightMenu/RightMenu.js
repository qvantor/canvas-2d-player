import React from 'react'
import { Tabs } from 'antd'

import Selected from '../Selected/Selected'
import Explorers from '../Explorers/Explorers'

const RightMenu = () => {
  return (
    <div className='right-menu border-left border-dark bg-clouds'>
      <Selected />
      <Explorers />
    </div>
  )
}

export default RightMenu
