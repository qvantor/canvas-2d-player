import { fabric } from 'fabric'

import { selected, deselected } from 'reducers/control/control.actions'

export let canvas

export const createCanvas = elem => {
  canvas = new fabric.Canvas(elem)

  const select = (e) => selected(e.selected.map(item => item.id))
  canvas.on('selection:cleared', deselected)
  canvas.on('selection:created', select)
  canvas.on('selection:updated', select)

  return canvas
}
