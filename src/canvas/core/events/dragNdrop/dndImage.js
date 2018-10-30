import { img } from '../../objects/'
import { canvas } from 'canvas/container'
import { cloneImage } from 'reducers/images/images.actions'

let imgObj
let lastPoint

export const drop = (e, data) => {
  canvas.canvas.remove(imgObj)
  imgObj = null
  const point = canvas.canvas.getPointer(e.e)
  cloneImage(data.imgId, { top: point.y, left: point.x })
}

export const dragenter = (e, data) => {
  const point = canvas.canvas.getPointer(e.e)
  imgObj = img({
    imgId: data.imgId,
    params: {
      top: point.y,
      left: point.x,
      originX: 'center',
      originY: 'center'
    }
  })
  canvas.canvas.add(imgObj)
}

export const dragleave = () => {
  canvas.canvas.remove(imgObj)
  imgObj = null
}

export const dragover = (e) => {
  const point = canvas.canvas.getPointer(e.e)
  if (lastPoint && lastPoint.x === point.x && lastPoint.y === point.y) return
  imgObj.top = point.y
  imgObj.left = point.x
  imgObj.dirty = true

  lastPoint = point

  canvas.renderer.render()
}
