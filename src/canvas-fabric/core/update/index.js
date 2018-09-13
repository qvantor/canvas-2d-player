import { canvas } from '../container'

export default (obj, props) => {
  obj.id = props.id
  obj.update = ({ params }) => {
    obj.angle = params.angle
    obj.left = params.left
    obj.top = params.top
    obj.scaleX = params.scaleX
    obj.scaleY = params.scaleY
    obj.flipX = params.flipX
    obj.originX = params.originX
    obj.originY = params.originY
    obj.setCoords()
    canvas.renderAll()
  }
  return obj
}
