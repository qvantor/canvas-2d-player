import { setParams } from 'reducers/objects/objects.actions'
import { setMaskParams } from 'reducers/masks/masks.actions'
import { typeById, types } from '../../../utils/'

import dragNDrop from './dragNdrop/'

export default (obj) => {
  if (!obj.on) return obj

  const extractParams = target => ({
    angle: target.angle,
    left: target.left,
    top: target.top,
    scaleX: target.scaleX,
    scaleY: target.scaleY,
    flipX: target.flipX,
    flipY: target.flipY,
    originX: 'center',
    originY: 'center',
    width: target.width,
    height: target.height
  })

  const set = target => {
    const type = typeById(target.id)
    if (type === types.OBJECT) setParams(target.id, extractParams(target))
    else if (type === types.MASK) setMaskParams(target.id, extractParams(target))
  }
  dragNDrop(obj)

  obj.on('moved', ({ target }) => set(target))
  obj.on('scaled', ({ target }) => set(target))
  obj.on('rotated', ({ target }) => set(target))

  obj.on('changed', () => setParams(obj.id, { text: obj.text }))

  // set(obj)
  return obj
}
