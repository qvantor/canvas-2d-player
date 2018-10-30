import { fabric } from 'fabric'

export const mask = (props) => {
  const obj = new fabric.Group(null, props.params)
  obj.type = 'mask'
  return obj
}
