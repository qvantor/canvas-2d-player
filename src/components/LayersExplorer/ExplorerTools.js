import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { findObj } from 'reducers/objects/objects.utils'
import { setParams, toggleLockObj, cloneObject, removeObject } from 'reducers/objects/objects.actions'
import { cloneAsMask } from 'reducers/masks/masks.actions'

const ExplorerTools = (props) => {
  const { selection, objects } = props
  let obj
  if (selection) obj = findObj(selection[0], objects)
  return (<div className='my-1'>
    <Button.Group size='small'>
      <Button
        onClick={() => cloneAsMask(obj.id)}
        title='Clone as mask'
        icon='block'
        disabled={!obj} />
      <Button
        onClick={() => cloneObject(obj.id)}
        title='Clone'
        icon='copy'
        disabled={!obj} />
      <Button
        onClick={() => toggleLockObj(obj)}
        title='Lock'
        icon='lock'
        disabled={!obj} />
      <Button
        onClick={() => setParams(obj.id, { mask: undefined })}
        title='Unmask'
        icon='gateway'
        disabled={!obj || !obj.params.mask} />
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
