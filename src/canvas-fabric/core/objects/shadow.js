import { fabric } from 'fabric'

export const createShadow = (params) => new fabric.Shadow(params)

export const updateShadow = (obj, params, oldParams) => {
  if (oldParams === params) return
  if (obj.shadow) {
    obj.shadow.affectStroke = params.affectStroke
    obj.shadow.blur = params.blur
    obj.shadow.color = params.color
    obj.shadow.offsetX = params.offsetX
    obj.shadow.offsetY = params.offsetY
  }
  else obj.shadow = createShadow(params)
}
