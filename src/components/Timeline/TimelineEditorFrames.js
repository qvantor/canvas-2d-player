import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'
import ReactDOM from 'react-dom'

class TimelineEditorFrames extends Component {
  state = { parent: null }

  componentDidMount () {
    this.setState({ parent: ReactDOM.findDOMNode(this).parentNode })
  }

  render () {
    const { obj, scale } = this.props
    const { parent } = this.state

    return (
      <div ref='parent'>
        {Object.keys(obj.keyframes).map(item => {
          const frame = obj.keyframes[item]
          return (<div className='keyframe-field' key={item}>
            {frame.keys.map((item, i) =>
              <div
                key={i}
                style={{ left: scale(item[0]) }}
                className='keyframe'
                ref={el => select(el).call(drag().on('drag', () => {
                  const value = scale.invert(mouse(parent || this.refs.parent)[0])
                  console.log(value)
                }))} />)}
          </div>)
        })}
      </div>
    )
  }
}

export default TimelineEditorFrames
