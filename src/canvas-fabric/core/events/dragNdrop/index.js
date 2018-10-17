import { store } from 'store'
import { types } from '../../../../utils'
import { getDrag } from 'sagas/selectors'

import * as dndImage from './dndImage'

export const dndEventCanvas = () => fn => {
  const { type, target, dragging, data } = getDrag(store.getState())
  if (!dragging || target !== types.DND_TARGET_CANVAS) return
  return fn({ type, data })
}

const typeEvents = {
  [types.DND_IMAGE]: dndImage
}

export default (canvas) => {
  canvas.on('dragenter', e => dndEventCanvas()(({ type, data }) => typeEvents[type].dragenter(e, data)))
  canvas.on('dragleave', e => dndEventCanvas()(({ type, data }) => typeEvents[type].dragleave(e, data)))
  canvas.on('drop', e => dndEventCanvas()(({ type, data }) => typeEvents[type].drop(e, data)))
  canvas.on('dragover', e => dndEventCanvas()(({ type, data }) => typeEvents[type].dragover(e, data)))
}
