import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'antd/lib/icon'
import ControlsFrames from './ControlsFrames'
import { frameToggle } from 'reducers/control/control.actions'
import { getClassNames } from 'dynamic-class-list'

class Controls extends Component {
  renderObjects = (objects) =>
    objects.map(item => {
      const open = this.props.openFrames.indexOf(item.id) !== -1
      return (
        <div key={item.id}>
          <div className={getClassNames('control-item', { open })}>
            <Icon type='caret-right' onClick={() => frameToggle(item.id)} />
            {item.name}
          </div>
          {open && <ControlsFrames obj={item} />}
          {item.children && this.renderObjects(item.children)}
        </div>)
    })

  render () {
    const { visible } = this.props

    return (
      <div className='controls'>
        {this.renderObjects(visible)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  visible: state.objects.visible,
  openFrames: state.control.openFrames
})
export default connect(mapStateToProps)(Controls)
