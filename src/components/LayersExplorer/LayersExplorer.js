import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getClassNames } from 'dynamic-class-list'
import ExplorerItem from './ExplorerItem'

import { putToChild, putToRoot } from 'reducers/objects/objects.actions'

class LayersExplorer extends Component {
  drag = null
  onDrop = (e, item, parent) => {
    e.preventDefault()
    e.stopPropagation()
    if (item.type !== 'group') {
      if (parent === 'root') putToRoot(this.drag)
      else putToChild(this.drag, parent)
      return
    }
    if (item.id === this.drag) return
    putToChild(this.drag, item.id)
    this.drag = null
  }
  renderChild = (childs, parent) => {
    const { selection } = this.props
    return childs.map(item =>
      <div
        className={getClassNames('tree-item', { 'active': selection && item.id === selection[0] })}
        key={item.id}
        onDragOver={e => e.preventDefault()}
        onDrag={e => {
          e.stopPropagation()
          this.drag = item.id
        }}
        onDrop={e => this.onDrop(e, item, parent)}
        draggable>
        <ExplorerItem parent={parent} item={item} />
        {item.children && <div className='children'>
          {this.renderChild(item.children, item.id)}
        </div>}
      </div>)
  }

  render () {
    const { objects } = this.props

    return (
      <div className='layers-explorer'>
        <div
          className='tree'
          onDragOver={e => {
            e.preventDefault()
            e.stopPropagation()
          }}
          onDrop={e => putToRoot(this.drag)}>
          {this.renderChild(objects, 'root')}
        </div>
      </div>
    )
  }
}

LayersExplorer.propTypes = {
  objects: PropTypes.array,
  selection: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => ({
  selection: state.control.selection,
  objects: state.objects
})
export default connect(mapStateToProps)(LayersExplorer)
