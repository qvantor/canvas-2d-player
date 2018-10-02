import { fabric } from 'fabric'

const masksCache = {}

export const group = (props) => {
  if (props.params.mask) {
    if (masksCache[props.id]) return masksCache[props.id]
    masksCache[props.id] = new fabric.Group(null, props.params)
    return masksCache[props.id]
  }

  return new fabric.Group(null, props.params)
}
