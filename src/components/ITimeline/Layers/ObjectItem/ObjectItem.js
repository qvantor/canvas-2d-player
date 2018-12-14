import React from 'react'
import PropTypes from 'prop-types'
import { getClassNames } from 'dynamic-class-list'

import ControlButtons from './ControlButtons'
import VisibleLine from './VisibleLine'
import ObjectName from './ObjectName'
import ObjectParams from './ObjectParams'
import ObjectDND from './ObjectDND'
import DnDEnter from './DnDEnter'

const ObjectItem = (props) => {
  const { item, index, scale, rightWidth, width, open } = props
  return (
    <ObjectDND id={item.id} index={index} open={open}>
      <div className={getClassNames('object', { open })}>
        <div className='object-line' style={{ width }}>
          <div className='object-line-left' style={{ width: rightWidth }}>
            <ControlButtons item={item} />
            <ObjectName item={item} index={index} />
          </div>
          <div className='object-line-right'>
            <VisibleLine scale={scale} id={item.id} />
          </div>
        </div>
        {open && <ObjectParams item={item} rightWidth={rightWidth} width={width} scale={scale} />}
        <DnDEnter id={item.id} />
      </div>
    </ObjectDND>
  )
}

ObjectItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  rightWidth: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default ObjectItem
