import { fabric } from 'fabric'

export let canvas

export const createCanvas = elem => {
  canvas = new fabric.Canvas(elem)
  return canvas
}
