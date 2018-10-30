import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'antd/lib/icon'
import ControlsFrames from './ControlsFrames'
import { frameToggle } from 'reducers/control/control.actions'
import { getClassNames } from 'dynamic-class-list'

class Controls extends Component {
  renderObjects = (objects, openFrames) => {
    const list = []

    for (let key in objects) {
      const item = objects[key]
      const open = openFrames.indexOf(item.id) !== -1
      list.push(
        <div key={item.id}>
          <div className={getClassNames('control-item', { open })}>
            <Icon type='caret-right' onClick={() => frameToggle(item.id)} />
            {item.name}
          </div>
          {open && <ControlsFrames obj={item} />}
          {/*{item.children && this.renderObjects(item.children)}*/}
        </div>)
    }
    return list
  }

  render () {
    const { objects, openFrames } = this.props

    return (
      <div className='controls'>
        {this.renderObjects(objects, openFrames)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  objects: state.objects,
  openFrames: state.control.openFrames
})
export default connect(mapStateToProps)(Controls)
