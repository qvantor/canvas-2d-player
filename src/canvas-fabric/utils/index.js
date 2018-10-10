import { canvas, renderer } from '../core/container'

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
  renderer.render()
}
