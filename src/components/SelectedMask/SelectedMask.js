import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MaskParams from './MaskParams'
import { Collapse } from 'antd'

const { Panel } = Collapse

const SelectedMask = (props) => {
  const { selected, masks } = props
  const mask = masks[selected]
  if (!mask) return null
  return (
    <Collapse className='collapse-xs' bordered={false} defaultActiveKey={['2']}>
      <Panel header='Position' key={'1'}>
        {/*<Position obj={obj} />*/}

      </Panel>
      <Panel header='Mask' key={'2'}>
        <MaskParams mask={mask} />
      </Panel>
    </Collapse>
  )
}

SelectedMask.propTypes = {
  masks: PropTypes.object,
  selected: PropTypes.string
}

const mapStateToProps = state => ({
  masks: state.masks
})
export default connect(mapStateToProps)(SelectedMask)
