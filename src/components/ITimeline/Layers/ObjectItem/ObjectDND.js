import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { dragEnd, dragStart, dragEnter } from 'reducers/control/control.actions'
import { objReorder } from 'reducers/objOrder/objOrder.actions'
import * as types from 'utils/types'

const ObjectDND = (props) => {
  const { id, children, drag } = props

  const onDragStart = () => dragStart(types.DND_TIMELINE_OBJECT, types.DND_TIMELINE_OBJECT, { id: id })
  const onDragEnter = () => drag.target === types.DND_TIMELINE_OBJECT && dragEnter({ id: id })
  const onDrop = (e) => {
    if (id === drag.data.id) return
    objReorder({ objId: drag.data.id, aboveId: id })
    e.stopPropagation()
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
  children: PropTypes.node.isRequired,
  drag: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  drag: state.control.drag
})
export default connect(mapStateToProps)(ObjectDND)
