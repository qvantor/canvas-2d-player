import { renderer } from '../container'
import { updateShadow } from '../objects/shadow'
import * as Masks from '../Masks'

import rect from './rect'
import textbox from './textbox'
import mask from './mask'
import path from './path'

export default (obj, props) => {
  obj.id = props.id
  if (props.params && props.params.mask) obj.clipPath = Masks.getMask(props.params.mask, obj)

  obj.update = (props, oldProps, type) => {
    const { params } = props
    const oldParams = oldProps.params
    // coordinates sync
    if (params.angle !== oldParams.angle) obj.angle = params.angle
    if (params.left !== oldParams.left) obj.left = params.left
    if (params.top !== oldParams.top) obj.top = params.top
    if (params.scaleX !== oldParams.scaleX) obj.scaleX = params.scaleX
    if (params.scaleY !== oldParams.scaleY) obj.scaleY = params.scaleY
    if (params.flipX !== oldParams.flipX) obj.flipX = params.flipX
    if (params.originX !== oldParams.originX) obj.originX = params.originX
    if (params.originY !== oldParams.originY) obj.originY = params.originY
    if (params.width !== oldParams.width) obj.width = params.width
    if (params.height !== oldParams.height) obj.height = params.height

    // controls sync
    if (params.selectable !== oldParams.selectable) obj.selectable = params.selectable
    if (params.evented !== oldParams.evented) obj.evented = params.evented
    if (params.hasControls !== oldParams.hasControls) obj.hasControls = params.hasControls
    if (params.hasBorders !== oldParams.hasBorders) obj.hasBorders = params.hasBorders
    if (params.hasRotatingPoint !== oldParams.hasRotatingPoint) obj.hasRotatingPoint = params.hasRotatingPoint

    // lock sync
    if (params.lockMovementX !== oldParams.lockMovementX) obj.lockMovementX = params.lockMovementX
    if (params.lockMovementY !== oldParams.lockMovementY) obj.lockMovementY = params.lockMovementY
    //
    // extratypes sync
    if (type === 'rect') rect(obj, params, oldParams)
    else if (type === 'textbox') textbox(obj, params, oldParams)
    else if (type === 'path') path(obj, params, oldParams)
    // shadow sync
    updateShadow(obj, params, oldParams)

    // obj.mask sync
    if (params.mask !== oldParams.mask) {
      obj.clipPath = Masks.getMask(params.mask)
      obj.dirty = true
    }

    obj.setCoords()
    // mask update
    if (type === 'mask') mask(obj, params, oldParams)
    renderer.render()
  }
  return obj
}
