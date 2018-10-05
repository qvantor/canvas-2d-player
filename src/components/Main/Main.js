import React from 'react'

import Canvas from '../Canvas/Canvas'
import Objects from '../Objects/Objects'
import Selected from '../Selected/Selected'
import LayersExplorer from '../LayersExplorer/LayersExplorer'
import Timeline from '../Timeline/Timeline'
import Events from './Events'

import LeftMenu from '../LeftMenu/LeftMenu'

class Main extends React.Component {
  state = { cwidth: null, cheight: null }

  componentDidMount () {
    const { canvasContainer } = this.refs
    this.setState({ cwidth: canvasContainer.clientWidth, cheight: canvasContainer.clientHeight })
  }

  render () {
    const { cwidth, cheight } = this.state

    return (
      <div className='main-layout'>
        <Events />
        <LeftMenu />
        <div className='canvas-timeline'>
          <div className='canvas-container' ref='canvasContainer'>
            <Canvas width={cwidth} height={cheight} />
          </div>
          <Timeline />
        </div>
        <div className='right-menu bg-clouds p-1'>
          <div className='selected-params'>
            <Selected />
          </div>
          <LayersExplorer />
        </div>
      </div>
    )
  }
}

export default Main
