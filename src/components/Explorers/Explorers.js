import React from 'react'
import { Tabs } from 'antd'

import LayersExplorer from '../LayersExplorer/LayersExplorer'
import MasksExplorer from '../MasksExplorer/MasksExplorer'

const TabPane = Tabs.TabPane

const Explorers = () => {
  return (
    <div className='explorers border-top border-dark'>
      <Tabs type='card' className='small-tabs'>
        <TabPane tab='Objects' key='objects'><LayersExplorer /></TabPane>
        <TabPane tab='Masks' key='masks'><MasksExplorer /></TabPane>
      </Tabs>
    </div>
  )
}

export default Explorers
