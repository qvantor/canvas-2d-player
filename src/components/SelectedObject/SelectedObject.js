import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Collapse } from 'antd'

import Keyframes from '../Keyframes/Keyframes'
import Position from '../Selected/Position'
import Shadow from './Shadow'
import Rect from './Rect'
import Text from './Text'
import Path from './Path'

const { Panel } = Collapse

const SelectedObject = (props) => {
  const { selected, objects } = props
  const obj = objects[selected]
  if (!obj) return null

  const renderWithKeyFrames = (input, params) => (
    <div className='row'>
      <div className='col-md-6'>
        <Keyframes param={params.key} keyframes={obj.keyframes} id={obj.id} />
        {params.name}
      </div>
      <div className='col-md-6'>
        {input}
      </div>
    </div>)

  return (
    <Collapse className='collapse-xs' bordered={false} defaultActiveKey={['1', '3']}>
      <Panel header='Position' key={'1'}>
        <Position obj={obj} renderWithKeyFrames={renderWithKeyFrames} />
      </Panel>
      <Panel header={obj.type} key={'3'}>
        {obj.type === 'rect' && <Rect obj={obj} />}
        {obj.type === 'textbox' && <Text obj={obj} />}
        {obj.type === 'path' && <Path obj={obj} />}
      </Panel>
      <Panel header='Shadow' key={'2'}>
        <Shadow obj={obj} />
      </Panel>
    </Collapse>
  )
}

SelectedObject.propTypes = {
  selected: PropTypes.string,
  objects: PropTypes.object
}

const mapStateToProps = state => ({
  objects: state.objects
})
export default connect(mapStateToProps)(SelectedObject)
