import { canvas } from 'canvas/container'

export const show = (e) => {
  e.target.opacity = 0.5
  e.target.dirty = true
  canvas.renderer.render()
}

export const hide = (e) => {
  e.target.opacity = 1
  e.target.dirty = true
  canvas.renderer.render()
}
