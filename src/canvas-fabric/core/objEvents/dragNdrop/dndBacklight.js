import { renderer } from '../../container'

export const show = (e) => {
  e.target.opacity = 0.5
  e.target.dirty = true
  renderer.render()
}

export const hide = (e) => {
  e.target.opacity = 1
  e.target.dirty = true
  renderer.render()
}
