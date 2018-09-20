import React from 'react'

import Canvas from '../Canvas/Canvas'
import Objects from '../Objects/Objects'
import Selected from '../Selected/Selected'
import LayersExplorer from '../LayersExplorer/LayersExplorer'
import Timeline from '../Timeline/Timeline'
import Events from './Events'

class Main extends React.Component {
  state = { cwidth: null, cheight: null }

  componentDidMount () {
    const { canvasContainer } = this.refs
    this.setState({ cwidth: canvasContainer.clientWidth, cheight: canvasContainer.clientHeight })
  }

  render () {
    const { cwidth, cheight } = this.state

    return (
      <div className='container-fluid'>
        <Events />
        <div className='row'>
          <div className='col-md-9'>
            <div className='canvas-container row' ref='canvasContainer'>
              <Canvas width={cwidth} height={cheight} />
            </div>
            <Timeline />
          </div>
          <div className='col-md-3 bg-clouds'>
            <Objects />
            <div className='selected-params'>
              <Selected />
            </div>
            <LayersExplorer />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
