import { fabric } from 'fabric'
import { canvas } from '../container'

export const rect = (props) => new fabric.Rect(props.params)
export const group = (props) => new fabric.Group(null, props.params)
export const collection = () => fabric.Collection

export const img = (props) => {
  const fimg = new fabric.Image(null, props.params)
  fimg.setSrc(props.params.url, () => {
    canvas.renderAll()
    fimg.setCoords()
  })
  return fimg
}
