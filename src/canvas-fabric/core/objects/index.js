import { fabric } from 'fabric'
import { canvas } from '../container'

export const rect = (props) => new fabric.Rect(props)
export const group = (props) => new fabric.Group(null, props)
export const collection = () => fabric.Collection

export const img = (props) => {
  const fimg = new fabric.Image(null, props)
  fimg.setSrc(props.url, () => {
    canvas.renderAll()
    fimg.setCoords()
  })
  return fimg
}
