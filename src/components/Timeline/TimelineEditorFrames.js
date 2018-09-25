import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'
import ReactDOM from 'react-dom'

import { setKeyFrameTime, removeKeyFrame } from 'reducers/objects/objects.actions'

class TimelineEditorFrames extends Component {
  state = { parent: null }

  componentDidMount () {
    this.setState({ parent: ReactDOM.findDOMNode(this).parentNode })
  }

  onContextMenu = (e, id, index, key) => {
    e.preventDefault()
    removeKeyFrame(id, index, key)
  }

  render () {
    const { obj, scale } = this.props
    const { parent } = this.state

    return (
      <div ref='parent'>
        {Object.keys(obj.keyframes).map(key => {
          const frame = obj.keyframes[key]
          return (<div className='keyframe-field' key={key}>
            {frame.keys.map((item, i) =>
              <div
                key={i}
                style={{ left: scale(item[0]) }}
                className='keyframe'
                onContextMenu={e => this.onContextMenu(e, obj.id, i, key)}
                ref={el => select(el).call(drag()
                  .on('drag', () => {
                    const value = scale.invert(mouse(parent || this.refs.parent)[0])
                    setKeyFrameTime(obj.id, item[2], value, key)
                  })
                )} />)}
          </div>)
        })}
      </div>
    )
  }
}

export default TimelineEditorFrames
