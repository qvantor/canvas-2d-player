import React from 'react'

import Canvas from '../Canvas/Canvas'
import Timeline from '../Timeline/Timeline'
import Events from './Events'
import LeftMenu from '../LeftMenu/LeftMenu'
import RightMenu from '../RightMenu/RightMenu'

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
        <RightMenu />
      </div>
    )
  }
}

export default Main
