import { renderer } from '../container'

import { addMaskToObj } from 'reducers/masks/masks.actions'

export default (obj) => {
  obj.on('drop', (e) => {
    e.e.preventDefault()
    obj.opacity = 1
    obj.dirty = true
    renderer.render()

    const maskId = e.e.dataTransfer.getData('id')
    if (maskId) addMaskToObj(obj.id, maskId)
  })
  obj.on('dragenter', (e) => {
    e.e.preventDefault()
    e.target.opacity = 0.5
    e.target.dirty = true
    renderer.render()
  })
  obj.on('dragleave', (e) => {
    e.e.preventDefault()
    obj.opacity = 1
    obj.dirty = true
    renderer.render()
  })
}
