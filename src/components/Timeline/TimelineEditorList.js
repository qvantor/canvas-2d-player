import React, { Component } from 'react'
import { connect } from 'react-redux'

import VisibleLines from './VisibleLines'
import TimelineEditorFrames from './TimelineEditorFrames'

class TimelineEditorList extends Component {
  renderObjects = (objects) => {
    const { scale, openFrames } = this.props
    const list = []
    for (let key in objects) {
      const item = objects[key]
      const open = openFrames.indexOf(item.id) !== -1
      list.push(<div key={item.id}>
        <div className='visible-lines'>
          <VisibleLines objId={item.id} scale={scale} />
        </div>
        {open && <TimelineEditorFrames obj={item} scale={scale} />}
        {/*{item.children && this.renderObjects(item.children)}*/}
      </div>)
    }
    return list
  }

  render () {
    const { objects } = this.props

    return (
      <div className='timeline-editor-list'>
        {this.renderObjects(objects)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  objects: state.objects,
  openFrames: state.control.openFrames
})
export default connect(mapStateToProps)(TimelineEditorList)
