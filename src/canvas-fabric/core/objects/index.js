import { fabric } from 'fabric'
import { renderer } from '../container'
import curves from 'canvas-fabric/utils/curves'

export * from './mask'

export const group = (props) => new fabric.Group(null, props.params)
export const rect = (props) => new fabric.Rect(props.params)
export const collection = () => fabric.Collection

export const img = (props) => {
  const fimg = new fabric.Image(null, props.params)
  fimg.setSrc(props.url, () => {
    fimg.setCoords()
    renderer.render()
  })
  return fimg
}

export const textbox = props => new fabric.Textbox(props.params.text, props.params)

export const path = props => new fabric.Path(curves(props.params.func)(props.params.points), props.params)
