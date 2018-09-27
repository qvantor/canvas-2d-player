import React, { Component } from 'react'
import Button from 'antd/lib/button'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setTool } from 'reducers/control/control.actions'

class Tools extends Component {
  render () {
    const { tool } = this.props

    const tools = [{
      name: 'Standard',
      key: 'standard',
      icon: 'drag'
    }, {
      name: 'Spline draw',
      key: 'spline',
      icon: 'highlight'
    }]

    return (
      <div className='pb-2'>
        <Button.Group size='small'>
          {tools.map(item => <Button
            onClick={() => setTool(item.key)}
            type={item.key === tool ? 'primary' : 'default'}
            icon={item.icon} />)}
        </Button.Group>
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
