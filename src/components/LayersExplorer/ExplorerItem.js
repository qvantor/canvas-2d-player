import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { cloneObject } from 'reducers/objects/objects.actions'
import { select } from 'reducers/control/control.actions'

import { Icon } from 'antd'
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
            if (parent === 'root') select([item.id])
          }}>
          <div className='row justify-content-between'>
            <div className='col-9'>
              {item.name}
            </div>
            <div className='col-3'>
              {item.params.locked && <Icon type='lock' className='item-icons' />}
              {item.params.mask && <Icon type='gateway' className='item-icons' />}
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
