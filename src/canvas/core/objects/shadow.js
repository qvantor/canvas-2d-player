import { fabric } from 'fabric'

export const createShadow = (params) => new fabric.Shadow(params)

export const updateShadow = (obj, params, oldParams) => {
  if (oldParams.shadow === params.shadow) return
  if (!params.shadow) {
    obj.shadow = undefined
    return
  }
  if (obj.shadow) {
    obj.shadow.affectStroke = params.shadow.affectStroke
    obj.shadow.blur = params.shadow.blur
    obj.shadow.color = params.shadow.color
    obj.shadow.offsetX = params.shadow.offsetX
    obj.shadow.offsetY = params.shadow.offsetY
  } else {
    obj.shadow = createShadow(params.shadow)
  }
}
