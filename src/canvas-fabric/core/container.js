import { fabric } from 'fabric'
import Renderer from './Renderer'

import canvasEvents from './events/'

export let canvas
export let renderer

export const createCanvas = elem => {
  canvas = new fabric.Canvas(elem)

  canvas.preserveObjectStacking = true

  canvasEvents(canvas)
  renderer = new Renderer(canvas)

  return canvas
}
