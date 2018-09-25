import { render } from '../container'
import { createShadow, updateShadow } from '../objects/shadow'

import rect from './rect'
import textbox from './textbox'

export default (obj, props) => {
  obj.id = props.id
  if (props.shadow) obj.shadow = createShadow(props)

  obj.update = ({params}, oldProps, type) => {
    if (type === 'rect') rect(obj, params, oldProps.params)
    if (type === 'textbox') textbox(obj, params, oldProps.params)
    updateShadow(obj, params, oldProps.params)

    obj.angle = params.angle
    obj.left = params.left
    obj.top = params.top
    obj.scaleX = params.scaleX
    obj.scaleY = params.scaleY
    obj.flipX = params.flipX
    obj.originX = params.originX
    obj.originY = params.originY
    obj.width = params.width
    obj.height = params.height
    obj.setCoords()
    render()
  }
  return obj
}
