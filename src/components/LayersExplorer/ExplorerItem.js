import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { setActiveObject } from 'canvas-fabric/core/container'
import { setParams } from 'reducers/objects/objects.actions'

import { Button } from 'antd'

class ExplorerItem extends Component {
  render () {
    const { parent, item } = this.props

    return (
      <div
        className='item'
        onClick={() => {
          if (parent === 'root' && item.params.selectable) setActiveObject(item.id)
        }}>
        <div className='row justify-content-between'>
          <div className='col-4'>
            {item.name}
          </div>
          <div className='col-3'>
            <Button.Group size='small' onClick={e => e.stopPropagation()}>
              <Button
                onClick={() => setParams(item.id, { selectable: !item.params.selectable })}
                disabled={parent !== 'root'}
                icon={item.params.selectable ? 'unlock' : 'lock'} />
            </Button.Group>
          </div>
        </div>
      </div>
    )
  }
}

ExplorerItem.propTypes = {
  parent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  item: PropTypes.object
}

export default ExplorerItem
