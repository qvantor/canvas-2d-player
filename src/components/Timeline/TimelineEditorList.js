import React, { Component } from 'react'
import { connect } from 'react-redux'

import VisibleLines from './VisibleLines'
import TimelineEditorFrames from './TimelineEditorFrames'

class TimelineEditorList extends Component {
  renderObjects = (objects) => {
    const { scale, openFrames } = this.props
    return objects.map(item => {
      const open = openFrames.indexOf(item.id) !== -1
      return (<div key={item.id}>
        <div className='visible-lines'>
          {item.visible.map((line, i) =>
            <VisibleLines key={i} objId={item.id} keyId={i} line={line} scale={scale} />
          )}
        </div>
        {open && <TimelineEditorFrames obj={item} scale={scale} />}
        {/*{item.children && this.renderObjects(item.children)}*/}
      </div>)
    })
  }

  render () {
    const { visible } = this.props

    return (
      <div className='timeline-editor-list'>
        {this.renderObjects(visible)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  visible: state.objects.visible,
  openFrames: state.control.openFrames
})
export default connect(mapStateToProps)(TimelineEditorList)
