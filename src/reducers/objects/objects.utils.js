import { id, types } from 'utils/'
import { store } from 'store'
import { getObjTypesList, getColors } from 'sagas/selectors'

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

export const createPathByPoints = ({ points, func, params }) => {
  const list = getObjTypesList(store.getState())
  const cleanObj = list.find(item => item.type === types.OBJ_TYPE_PATH)
  const obj = cleanObj.merge({
    id: id(),
    params: Object.assign({ points, func }, params, {
      originX: 'center',
      originY: 'center'
    })
  }, { deep: true })

  return createObj(obj)
}

export const createObj = (cleanObj) => {
  const obj = Object.assign({ id: id() }, cleanObj)
  const colors = getColors(store.getState())

  obj.params = obj.params.asMutable()
  if (obj.params.fill) obj.params.fill = colors[0]
  if (obj.params.color) obj.params.color = colors[0]

  return obj
}
