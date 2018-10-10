import React from 'react'
import PropTypes from 'prop-types'
import { getClassNames } from 'dynamic-class-list'
import { select } from 'reducers/control/control.actions'

const MaskItem = (props) => {
  const onDragStart = (e) => e.dataTransfer.setData('id', props.id)
  const { mask, isSelected, id } = props
  return (
    <div
      onClick={() => select([id])}
      className={getClassNames('mask-item', { 'active': isSelected })}
      onDragStart={onDragStart}
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
