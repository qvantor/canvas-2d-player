import React from 'react'
import PropTypes from 'prop-types'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'
import ReactDOM from 'react-dom'
import { removeKeyFrame, setKeyFrameTime } from 'reducers/objects/objects.actions'

class KeyFrames extends React.Component {
  state = { parent: null }

  componentDidMount () {
    this.setState({ parent: ReactDOM.findDOMNode(this).parentNode })
  }

  onContextMenu = (e, id, index, key) => {
    e.preventDefault()
    removeKeyFrame(id, index, key)
  }

  render () {
    const { keyframes, scale, width, id, schemaKey } = this.props
    const { parent } = this.state
    const domain = scale.domain()
    return (
      <div className='keyframes' style={{ width }} ref='parent'>
        {keyframes.keys
          .map((keyframe, i) =>
            keyframe[0] >= domain[0] && keyframe[0] <= domain[1]
              ? <div
                key={keyframe[2]}
                style={{ left: scale(keyframe[0]) }}
                className='keyframe'
                onContextMenu={e => this.onContextMenu(e, id, i, schemaKey)}
                ref={el => select(el).call(drag()
                  .on('drag', () => {
                    const value = scale.invert(mouse(parent || this.refs.parent)[0])
                    setKeyFrameTime(id, keyframe[2], value, schemaKey)
                  })
                )}
              />
              : null)}
      </div>
    )
  }
}

KeyFrames.propTypes = {
  id: PropTypes.string.isRequired,
  schemaKey: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  keyframes: PropTypes.object
}

export default KeyFrames
