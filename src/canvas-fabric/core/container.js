import { fabric } from 'fabric'

import { selected, deselected, entered, exited } from 'reducers/control/control.actions'

export let canvas
export const findObject = (id) => {
  const find = objects => {
    for (let i = 0; i < objects.length; i++) {
      const item = objects[i]
      if (item.id === id) return item
      else if (item.getObjects) {
        const obj = find(item.getObjects())
        if (obj) return obj
      }
    }
  }

  return find(canvas.getObjects())
}
export const setActiveObject = (id) => {
  const obj = findObject(id)
  if (obj) canvas.setActiveObject(obj)
  canvas.renderAll()
}

export const createCanvas = elem => {
  canvas = new fabric.Canvas(elem)

  const select = (e) => selected(e.selected.map(item => item.id))
  canvas.on('selection:cleared', deselected)
  canvas.on('selection:created', select)
  canvas.on('selection:updated', select)

  canvas.on('text:editing:entered', entered)
  canvas.on('text:editing:exited', exited)

  return canvas
}
