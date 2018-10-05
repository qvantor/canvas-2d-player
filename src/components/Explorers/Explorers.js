import React from 'react'
import { Tabs } from 'antd'

import LayersExplorer from '../LayersExplorer/LayersExplorer'

const TabPane = Tabs.TabPane

const Explorers = () => {
  return (
    <div className='explorers border-top border-dark'>
      <Tabs type='card' className='small-tabs'>
        <TabPane tab='Objects' key='1'><LayersExplorer /></TabPane>
        <TabPane tab='Masks' key='2'>Masks</TabPane>
      </Tabs>
    </div>
  )
}

export default Explorers
