import React from 'react'

import Canvas from '../Canvas/Canvas'

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
        <div className='row'>
          <div className='col-md-9 canvas-container' ref='canvasContainer'>
            <Canvas width={cwidth} height={cheight} />
          </div>
          <div className='col-md-3'>text</div>
        </div>
      </div>
    )
  }
}

export default Main
