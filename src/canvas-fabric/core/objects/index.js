import { fabric } from 'fabric'
import { render } from '../container'
import curves from 'canvas-fabric/utils/curves'

export * from './group'

export const rect = (props) => new fabric.Rect(props.params)
export const collection = () => fabric.Collection

export const img = (props) => {
  const fimg = new fabric.Image(null, props.params)
  fimg.setSrc(props.url, () => {
    render()
    fimg.setCoords()
  })
  return fimg
}

export const textbox = props => new fabric.Textbox(props.params.text, props.params)

export const path = props => new fabric.Path(curves(props.params.func)(props.params.points), props.params)
