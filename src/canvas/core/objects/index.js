import { fabric } from 'fabric'
import { curves } from 'utils'
import { addListener } from 'reducers/images/images.manager'

export * from './mask'

export const group = (props) => new fabric.Group(null, props.params)
export const rect = (props) => new fabric.Rect(props.params)
export const collection = () => fabric.Collection

export const img = (props) => {
  const fimg = new fabric.Image(null, props.params)
  addListener(props.imgId, fimg)
  return fimg
}

export const textbox = props => new fabric.Textbox(props.params.text, props.params)

export const path = props => new fabric.Path(curves(props.params.func)(props.params.points), props.params)
