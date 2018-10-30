import { id, types } from 'utils/'
import { store } from 'store'
import { getObjTypesList } from 'sagas/selectors'

export const findObj = (id, list) => list[id]

export const setPropToAll = (func) => (list) => list.map(item => {
  if (item.children && item.children.length > 0) item.merge({ children: setPropToAll(func)(item.children) })
  return func(item)
})

export const createImgObj = (imgId, params) => {
  const objTypes = getObjTypesList(store.getState())
  const clearImgObj = objTypes.find(item => item.type === 'img')
  return Object.assign({}, clearImgObj, {
    id: id(types.OBJECT),
    imgId,
    params: Object.assign({}, clearImgObj.params, params)
  })
}
