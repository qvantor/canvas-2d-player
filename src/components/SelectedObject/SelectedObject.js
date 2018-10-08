import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { findObj } from 'reducers/objects/objects.utils'
import { Collapse } from 'antd'

import Position from './Position'
import Shadow from './Shadow'
import Rect from './Rect'
import Text from './Text'

const { Panel } = Collapse

const SelectedObject = (props) => {
  const { selected, objects } = props
  const obj = findObj(selected, objects)
  if (!obj) return null

  return (
    <Collapse className='collapse-xs' bordered={false} defaultActiveKey={['1']}>
      <Panel header='Position' key={'1'}>
        <Position obj={obj} />
      </Panel>
      <Panel header='Shadow' key={'2'}>
        <Shadow obj={obj} />
      </Panel>
      <Panel header={obj.type} key={'3'}>
        {obj.type === 'rect' && <Rect obj={obj} />}
        {obj.type === 'textbox' && <Text obj={obj} />}
      </Panel>
    </Collapse>
  )
}

SelectedObject.propTypes = {
  selected: PropTypes.string,
  objects: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
  objects: state.objects
})
export default connect(mapStateToProps)(SelectedObject)
