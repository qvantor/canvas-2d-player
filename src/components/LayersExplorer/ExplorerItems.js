import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { putToRoot, putToChild } from 'reducers/objects/objects.actions'
import { getClassNames } from 'dynamic-class-list'
import ExplorerItem from './ExplorerItem'

class ExplorerItems extends PureComponent {
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
      <div
        className='tree'
        onDragOver={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
        onDrop={e => putToRoot(this.drag)}>
        {this.renderChild(objects, 'root')}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  objects: state.objects,
  selection: state.control.selection
})
export default connect(mapStateToProps)(ExplorerItems)
