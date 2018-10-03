import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { setActiveObject } from 'canvas-fabric/core/container'
import { setParams, cloneObject } from 'reducers/objects/objects.actions'

import { Button } from 'antd'
import ContextMenu from '../ContextMenu/ContextMenu'

class ExplorerItem extends PureComponent {
  render () {
    const { parent, item } = this.props
    const contextSchema = [
      {
        item: 'Clone',
        onClick: (e, proxy) => {
          cloneObject(item.id)
          proxy.close()
        }
      },
      {
        item: 'Clone as Mask',
        onClick: (e, proxy) => {
          proxy.close()
        }
      }
    ]
    return (
      <ContextMenu schema={contextSchema}>
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
      </ContextMenu>
    )
  }
}

ExplorerItem.propTypes = {
  parent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  item: PropTypes.object
}

export default ExplorerItem
