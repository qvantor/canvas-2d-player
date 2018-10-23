import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'

import { setVisible } from 'reducers/visible/visible.actions'

class VisibleLines extends Component {
  state = { parent: null }

  componentDidMount () {
    this.setState({ parent: ReactDOM.findDOMNode(this).parentNode })
  }

  render () {
    const { scale, objId, visible } = this.props
    const { parent } = this.state
    const line = visible[objId] || [0, 0]
    const width = scale(line[1] - line[0])
    const left = scale(line[0])

    return (
      <div className='line' style={{ width, left }} ref='parent'>
        <div
          className='handle handle-left'
          ref={el => select(el).call(drag().on('drag', () => {
            const value = scale.invert(mouse(parent || this.refs.parent)[0])
            setVisible(objId, [value, line[1]])
          }))} />
        <div
          className='handle handle-right'
          ref={el => select(el).call(drag().on('drag', () => {
            const value = scale.invert(mouse(parent || this.refs.parent)[0])
            // setObjectVisibleFrame(objId, [line[0], value])
            setVisible(objId, [line[0], value])
          }))} />
        <div className='brush' />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  visible: state.visible.keys
})
export default connect(mapStateToProps)(VisibleLines)
