import React from 'react'
import { Tabs } from 'antd'

import LayersExplorer from '../LayersExplorer/LayersExplorer'
import MasksExplorer from '../MasksExplorer/MasksExplorer'
import ImagesExplorer from '../ImagesExplorer/ImagesExplorer'

const TabPane = Tabs.TabPane

const Explorers = () => {
  return (
    <div className='explorers border-top border-dark'>
      <Tabs type='card' className='small-tabs'>
        <TabPane tab='Objects' key='objects'><LayersExplorer /></TabPane>
        <TabPane tab='Masks' key='masks'><MasksExplorer /></TabPane>
        <TabPane tab='Images' key='images'><ImagesExplorer /></TabPane>
      </Tabs>
    </div>
  )
}

export default Explorers
