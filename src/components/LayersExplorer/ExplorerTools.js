import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { findObj } from 'reducers/objects/objects.utils'
import { setParams, cloneObject, removeObject } from 'reducers/objects/objects.actions'

const ExplorerTools = (props) => {
  const lock = (obj) => setParams(obj.id, {
    locked: !obj.params.locked,
    selectable: obj.params.locked,
    hasControls: obj.params.locked,
    hasBorders: obj.params.locked,
    hasRotatingPoint: obj.params.locked,
    evented: obj.params.locked,
    lockMovementX: !obj.params.locked,
    lockMovementY: !obj.params.locked
  })
  const { selection, objects } = props
  let obj
  if (selection) obj = findObj(selection[0], objects)
  return (<div>
    <Button.Group size='small'>
      <Button title='Set mask' icon='block' disabled={!obj} />
      <Button
        onClick={() => cloneObject(obj.id)}
        title='Clone'
        icon='copy'
        disabled={!obj} />
      <Button
        onClick={() => lock(obj)}
        title='Lock'
        icon='lock'
        disabled={!obj} />
      <Button
        onClick={() => removeObject(obj.id)}
        title='Delete'
        className='color-red'
        icon='delete'
        disabled={!obj} />
    </Button.Group>
  </div>)
}

const mapStateToProps = state => ({
  objects: state.objects,
  selection: state.control.selection
})
export default connect(mapStateToProps)(ExplorerTools)