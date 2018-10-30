import React, { Component } from 'react'
import Button from 'antd/lib/button'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setTool } from 'reducers/control/control.actions'
import { types } from 'utils/'

class Tools extends Component {
  render () {
    const { tool } = this.props

    const tools = [{
      name: 'Move tool',
      key: types.TOOL_SELECTION_MOVE,
      icon: 'drag'
    }, {
      name: 'Spline draw',
      key: types.TOOL_BRUSH_CURVE,
      icon: 'highlight'
    }]

    return (
      <div>
        {tools.map(item => <Button
          key={item.key}
          size='small'
          className='w-100 rounded-0'
          title={item.name}
          onClick={() => setTool(item.key)}
          type={item.key === tool ? 'primary' : 'default'}
          icon={item.icon} />)}
      </div>
    )
  }
}

Tools.propTypes = {
  tool: PropTypes.string
}

const mapStateToProps = state => ({
  tool: state.control.tool
})
export default connect(mapStateToProps)(Tools)
