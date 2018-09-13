import { setParams } from 'reducers/objects/objects.actions'

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
    originX: target.originX,
    originY: target.originY
  })

  obj.on('moved', ({ target }) => set(target))
  obj.on('scaled', ({ target }) => set(target))
  obj.on('rotated', ({ target }) => set(target))

  return obj
}
