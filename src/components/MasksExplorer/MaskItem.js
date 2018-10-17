import React from 'react'
import PropTypes from 'prop-types'
import { getClassNames } from 'dynamic-class-list'
import { select, dragStart, dragEnd } from 'reducers/control/control.actions'
import { types } from 'utils/'

const MaskItem = (props) => {
  const { mask, isSelected, id } = props
  return (
    <div
      onClick={() => select([id])}
      className={getClassNames('mask-item', { 'active': isSelected })}
      onDragStart={() => dragStart(types.DND_MASK, types.DND_TARGET_OBJ, { maskId: props.id })}
      onDragEnd={dragEnd}
      draggable>
      {mask.name}
    </div>
  )
}

MaskItem.propTypes = {
  id: PropTypes.string,
  mask: PropTypes.object,
  isSelected: PropTypes.bool
}

export default MaskItem
