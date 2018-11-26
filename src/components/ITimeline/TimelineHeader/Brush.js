import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { brushX, brushSelection } from 'd3-brush'
import { select } from 'd3-selection'
import { setSelection } from 'reducers/timeline/timeline.actions'

class Brush extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.width !== this.props.width
  }

  render () {
    const { width, scale, selection } = this.props
    const brush = brushX()
      .extent([[0, 0], [width, 22]])
      .on('brush', function () {
        const selected = brushSelection(this)
        const x1 = Math.round(scale.invert(selected[0]))
        const x2 = Math.round(scale.invert(selected[1]))
        setSelection([x1, x2])
      })
    return (<g className='brush' ref={el => select(el)
      .call(brush)
      .call(brush.move, selection.map(scale))} />)
  }
}

Brush.propTypes = {
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  selection: PropTypes.arrayOf(PropTypes.number).isRequired
}

const mapStateToProps = state => ({
  selection: state.timeline.selection
})
export default connect(mapStateToProps)(Brush)
