import { selected, deselected, entered, exited } from 'reducers/control/control.actions'

import dragNdrop from './dragNdrop/'

export default (canvas) => {
  const select = (e) => {
    const objects = e.selected.map(item => item.id).filter(item => item)
    if (objects.length > 0) selected(objects)
  }
  canvas.on('selection:cleared', deselected)
  canvas.on('selection:created', select)
  canvas.on('selection:updated', select)

  canvas.on('text:editing:entered', entered)
  canvas.on('text:editing:exited', exited)

  dragNdrop(canvas)
}
