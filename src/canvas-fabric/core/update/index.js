import { render } from '../container'
import { updateShadow } from '../objects/shadow'
import * as Masks from '../Masks'

import rect from './rect'
import textbox from './textbox'
import mask from './mask'

export default (obj, props) => {
  obj.id = props.id
  if (props.params && props.params.mask) obj.clipPath = Masks.getMask(props.params.mask, obj)

  obj.update = (props, oldProps, type) => {
    const { params } = props
    // coordinates sync
    if (params.angle) obj.angle = params.angle
    if (params.left) obj.left = params.left
    if (params.top) obj.top = params.top
    if (params.scaleX) obj.scaleX = params.scaleX
    if (params.scaleY) obj.scaleY = params.scaleY
    if (params.flipX) obj.flipX = params.flipX
    if (params.originX) obj.originX = params.originX
    if (params.originY) obj.originY = params.originY
    if (params.width) obj.width = params.width
    if (params.height) obj.height = params.height
    if (params.selectable !== undefined) obj.selectable = params.selectable

    // extratypes sync
    if (type === 'rect') rect(obj, params, oldProps.params)
    if (type === 'textbox') textbox(obj, params, oldProps.params)
    // shadow sync
    updateShadow(obj, params, oldProps.params)

    // obj.mask sync
    if (params.mask !== oldProps.params.mask) {
      obj.clipPath = Masks.getMask(params.mask)
      if (obj.addWithUpdate) obj.addWithUpdate()
    }

    obj.setCoords()

    // mask update
    if (type === 'mask') mask(obj, params, oldProps.params)
    render()
  }
  return obj
}
