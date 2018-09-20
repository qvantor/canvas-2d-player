import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

import { setObjectVisibleFrame } from 'reducers/objects/objects.actions'

class VisibleLines extends Component {
  state = { parent: null }

  componentDidMount () {
    this.setState({ parent: ReactDOM.findDOMNode(this).parentNode })
  }

  render () {
    const { scale, line, objId, keyId } = this.props
    const { parent } = this.state
    const width = scale(line[1] - line[0])
    const left = scale(line[0])

    return (
      <div className='line' style={{ width, left }} ref='parent'>
        <div
          className='handle handle-left'
          ref={el => select(el).call(drag().on('drag', () => {
            const value = scale.invert(mouse(parent || this.refs.parent)[0])
            setObjectVisibleFrame(objId, keyId, [value, line[1]])
          }))} />
        <div
          className='handle handle-right'
          ref={el => select(el).call(drag().on('drag', () => {
            const value = scale.invert(mouse(parent || this.refs.parent)[0])
            setObjectVisibleFrame(objId, keyId, [line[0], value])
          }))} />
        <div className='brush' />
      </div>
    )
  }
}

export default VisibleLines
