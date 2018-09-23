import * as constants from './objects.constants'
import { store } from 'store'
import { setActiveObject } from 'canvas-fabric/core/container'

const { dispatch } = store

export const addObject = (obj) => dispatch({ type: constants.ADD_OBJ, payload: obj })
export const putToChild = (child, parent) => {
  if (child === parent) return
  dispatch({ type: constants.OBJ_MOVED, payload: { child, parent } })
  setActiveObject(child)
}
export const putToRoot = (child) => {
  dispatch({ type: constants.OBJ_MOVED_ROOT, payload: child })
  setActiveObject(child)
}
export const removeObject = (id) => dispatch({ type: constants.REMOVE_OBJ, payload: id })
export const setParams = (id, params) => dispatch({ type: constants.OBJ_SET_PROPS, payload: { id, params } })

export const setObjectVisibleFrame = (objId, keyId, value) =>
  dispatch({ type: constants.OBJ_VISIBLE_FRAME_SET, payload: { objId, keyId, value } })

export const setKeyFrameTime = (id, keyId, value, key) =>
  dispatch({ type: constants.OBJ_KEYFRAME_TIME_SET, payload: { id, keyId, value: Math.round(value), key } })
