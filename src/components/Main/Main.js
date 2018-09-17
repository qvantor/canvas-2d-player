import React from 'react'

import Canvas from '../Canvas/Canvas'
import Objects from '../Objects/Objects'
import Selected from '../Selected/Selected'
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
          <div className='col-md-9 canvas-container' ref='canvasContainer'>
            <Canvas width={cwidth} height={cheight} />
          </div>
          <div className='col-md-3 p-3 bg-clouds'>
            <Objects />
            <Selected />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
