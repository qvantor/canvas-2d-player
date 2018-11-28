import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { brushX, brushSelection } from 'd3-brush'
import { select, mouse } from 'd3-selection'
import { setSelection } from 'reducers/timeline/timeline.actions'

class Brush extends Component {
  componentWillMount () {
    this.brush = React.createRef()
  }

  getSelection () {
    const { scale } = this.props
    const selected = brushSelection(this.brush)
    if (!selected) return [0, 0]
    const x1 = Math.round(scale.invert(selected[0]))
    const x2 = Math.round(scale.invert(selected[1]))
    return [x1, x2]
  }

  shouldComponentUpdate (nextProps) {
    const { selection, width } = nextProps
    const oldSelection = this.getSelection()
    if (selection[0] !== oldSelection[0] || selection[1] !== oldSelection[1]) {
      select(this.brush).call(this.brushX.move, selection.map(this.props.scale))
    }
    return width !== this.props.width
  }

  render () {
    const { width, scale, selection } = this.props
    const minSelectionSize = 20
    const brush = this.brushX = brushX()
      .extent([[0, 0], [width, 22]])
      .on('brush', () => {
        const selection = this.getSelection()
        if (selection[1] - selection[0] < minSelectionSize) {
          selection[1] = selection[0] + minSelectionSize
        }
        setSelection(selection)
      })

    return (<g className='brush' ref={el => {
      this.brush = el
      select(el)
        .call(this.brushX)
        .call(this.brushX.move, selection.map(scale))
        .selectAll('.overlay')
        .each(d => (d.type = 'selection'))
        .on('mousedown touchstart', function () {
          const click = Math.round(scale.invert(mouse(this)[0]))
          const x1 = click - minSelectionSize / 2
          const x2 = click + minSelectionSize / 2
          select(this.parentNode).call(brush.move, [x1, x2].map(scale))
        })
    }} />)
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
