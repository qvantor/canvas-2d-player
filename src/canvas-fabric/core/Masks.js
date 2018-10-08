const masks = {}

export const setMask = (id, mask) => {
  mask.maskParents = []
  masks[id] = mask
}

export const getMask = (id, obj) => {
  const mask = masks[id]
  if (obj) mask.maskParents.push(obj)
  return mask
}

export const removeMask = (id) => {
  delete masks[id]
}
