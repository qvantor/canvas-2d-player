import React from 'react'

import Canvas from '../Canvas/Canvas'
import Timeline from '../ITimeline/ITimeline'
import Events from './Events'
import LeftMenu from '../LeftMenu/LeftMenu'
import RightMenu from '../RightMenu/RightMenu'
import TopMenu from '../TopMenu/TopMenu'
import Settings from '../Settings/Settings'

class Main extends React.Component {
  state = { cwidth: null, cheight: null }

  componentDidMount () {
    const { canvasContainer } = this.refs
    this.setState({ cwidth: canvasContainer.clientWidth, cheight: canvasContainer.clientHeight })
  }

  render () {
    const { cwidth, cheight } = this.state

    return (
      <div>
        <TopMenu />
        <div className='main-layout'>
          <Events />
          <LeftMenu />
          <div className='canvas-timeline'>
            <div ref='canvasContainer'>
              <Canvas width={cwidth} height={cheight} />
            </div>
            <Timeline />
          </div>
          <RightMenu />
        </div>
        <Settings />
      </div>
    )
  }
}

export default Main
