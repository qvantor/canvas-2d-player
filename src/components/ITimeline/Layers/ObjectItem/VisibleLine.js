import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { select, mouse } from 'd3-selection'
import { drag } from 'd3-drag'
import { setVisible } from 'reducers/visible/visible.actions'

class VisibleLine extends React.Component {
  state = { parent: null }

  componentDidMount () {
    this.setState({ parent: ReactDOM.findDOMNode(this).parentNode })
  }

  render () {
    const { scale, id, visible } = this.props
    const { parent } = this.state
    const line = visible[id] || [0, 0]
    const width = scale(line[1]) - scale(line[0])
    const left = scale(line[0])
    const domain = scale.domain()
    return (
      <div className='visible-line' style={{ width, left }} ref='parent'>
        {domain[0] <= line[0] && <div
          ref={el => select(el).call(drag().on('drag', () => {
            const value = scale.invert(mouse(parent || this.refs.parent)[0])
            setVisible(id, [value, line[1]])
          }))}
          className='handle handle-left' />}
        {domain[1] >= line[1] && <div
          ref={el => select(el).call(drag().on('drag', () => {
            const value = scale.invert(mouse(parent || this.refs.parent)[0])
            setVisible(id, [line[0], value])
          }))}
          className='handle handle-right' />}
      </div>
    )
  }
}

VisibleLine.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.object.isRequired,
  scale: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  visible: state.visible.keys
})

export default connect(mapStateToProps)(VisibleLine)
