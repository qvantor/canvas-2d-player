import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { dragEnd, dragStart } from 'reducers/control/control.actions'
import { objReorder } from 'reducers/objOrder/objOrder.actions'
import * as types from 'utils/types'

const ObjectDND = (props) => {
  const { item, index, children, drag } = props

  const onDragStart = () => dragStart(types.DND_TIMELINE_OBJECT, types.DND_TIMELINE_OBJECT, { id: item.id })
  const onDragEnter = () => {
    if (item.id === drag.data.id) return
  }
  const onDrop = () => {
    if (item.id === drag.data.id) return
    objReorder(drag.data.id, item.id)
  }
  return (
    <div
      onDragOver={e => drag.target === types.DND_TIMELINE_OBJECT && e.preventDefault()}
      onDrop={onDrop}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={dragEnd}
      draggable>
      {children}
    </div>
  )
}

ObjectDND.propTypes = {
  children: PropTypes.node.isRequired
}

const mapStateToProps = state => ({
  drag: state.control.drag
})
export default connect(mapStateToProps)(ObjectDND)
