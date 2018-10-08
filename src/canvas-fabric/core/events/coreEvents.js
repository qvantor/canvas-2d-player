import { setParams } from 'reducers/objects/objects.actions'

import dragNDrop from './dragNdrop'

export default (obj) => {
  if (!obj.on) return obj
  const set = target => setParams(target.id, {
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
  dragNDrop(obj)

  obj.on('moved', ({ target }) => set(target))
  obj.on('scaled', ({ target }) => set(target))
  obj.on('rotated', ({ target }) => set(target))

  obj.on('changed', () => setParams(obj.id, { text: obj.text }))

  // set(obj)
  return obj
}
