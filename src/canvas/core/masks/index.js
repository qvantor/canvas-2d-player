import createMask from './createMask'
import { store } from 'store'
import { getMasks } from 'sagas/selectors'

const masks = {}

export const addMask = (id, mask) => {
  if (masks[id]) return masks[id]
  const maskInstance = createMask(mask)
  maskInstance.maskParents = []
  masks[id] = maskInstance
  return maskInstance
}

export const updateMask = (id, mask) => {
  if (masks[id]) {
    masks[id].update(mask)
    return masks[id]
  }
  return false
}

export const getMask = (id) => {
  if (masks[id]) return masks[id]
  const masksList = getMasks(store.getState())
  if (masksList[id]) return addMask(id, masksList[id])
  return false
}
