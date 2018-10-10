import { fabric } from 'fabric'
import Renderer from './Renderer'

import { selected, deselected, entered, exited } from 'reducers/control/control.actions'

export let canvas
export let renderer

export const createCanvas = elem => {
  canvas = new fabric.Canvas(elem)

  const select = (e) => selected(e.selected.map(item => item.id).filter(item => item))
  canvas.on('selection:cleared', deselected)
  canvas.on('selection:created', select)
  canvas.on('selection:updated', select)

  canvas.on('text:editing:entered', entered)
  canvas.on('text:editing:exited', exited)

  renderer = new Renderer(canvas)
  return canvas
}
