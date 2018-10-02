import { render } from '../container'
import { createShadow, updateShadow } from '../objects/shadow'

import rect from './rect'
import textbox from './textbox'

export default (obj, props) => {
  obj.id = props.id
  if (props.shadow) obj.shadow = createShadow(props)

  obj.update = (props, oldProps, type) => {
    console.log('update', props)
    const { params } = props
    if (type === 'rect') rect(obj, params, oldProps.params)
    if (type === 'textbox') textbox(obj, params, oldProps.params)
    updateShadow(obj, params, oldProps.params)

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
    obj.setCoords()
    // if (obj.addWithUpdate) obj.addWithUpdate()
    render()
  }
  return obj
}
