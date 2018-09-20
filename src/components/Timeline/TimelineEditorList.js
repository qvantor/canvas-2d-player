import React, { Component } from 'react'
import { connect } from 'react-redux'

import VisibleLines from './VisibleLines'

class TimelineEditorList extends Component {
  renderObjects = (objects) => {
    const { scale } = this.props
    return objects.map(item =>
      <div key={item.id}>
        <div className='visible-lines'>
          {item.visible.map((line, i) =>
            <VisibleLines key={i} objId={item.id} keyId={i} line={line} scale={scale} />
          )}
        </div>
        {item.children && this.renderObjects(item.children)}
      </div>)
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
  visible: state.objects.visible
})
export default connect(mapStateToProps)(TimelineEditorList)
