import { store } from 'store'
import { getDrag } from 'sagas/selectors'
import { types } from '../../../../utils/'

import * as dndMask from './dndMask'

export const dndEventObj = () => fn => {
  const { type, target, dragging, data } = getDrag(store.getState())
  if (!dragging || target !== types.DND_TARGET_OBJ) return
  return fn({ type, data })
}

const typeEvents = {
  [types.DND_MASK]: dndMask
}

export default (obj) => {
  obj.on('drop', (e) => dndEventObj()(({ type, data }) => typeEvents[type].drop(obj, e, data)))
  obj.on('dragenter', (e) => dndEventObj()(({ type, data }) => typeEvents[type].dragenter(obj, e, data)))
  obj.on('dragleave', (e) => dndEventObj()(({ type, data }) => typeEvents[type].dragleave(obj, e, data)))
}
