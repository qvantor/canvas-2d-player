import * as constants from './objects.constants'
import { store } from 'store'
import { setActiveObject } from 'canvas-fabric/utils'
import { round } from 'utils/'

const { dispatch } = store

export const addObject = (obj) => dispatch({ type: constants.ADD_OBJ, payload: obj })
export const cloneObject = (id) => dispatch({ type: constants.OBJ_CLONE, payload: id })
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
export const setParams = (id, params) => dispatch({ type: constants.OBJ_PROPS_SET, payload: { id, params } })

export const setObjectVisibleFrame = (objId, keyId, value) =>
  dispatch({ type: constants.OBJ_VISIBLE_FRAME_SET, payload: { objId, keyId, value } })

export const addKeyFrameParam = (id, key) =>
  dispatch({ type: constants.OBJ_KEYFRAME_ADD_PARAM, payload: { id, key } })

export const removeKeyFrameParam = (id, key) =>
  dispatch({ type: constants.OBJ_KEYFRAME_REMOVE_PARAM, payload: { id, key } })

export const setKeyFrameTime = (id, keyId, value, key) =>
  dispatch({ type: constants.OBJ_KEYFRAME_TIME_SET, payload: { id, keyId, value: round(value), key } })

export const removeKeyFrame = (id, keyId, key) =>
  dispatch({ type: constants.OBJ_KEYFRAME_REMOVE, payload: { id, keyId, key } })

export const nextFrame = (payload) =>
  dispatch({ type: constants.NEXT_KEYFRAME, payload })

export const prevFrame = (payload) =>
  dispatch({ type: constants.PREV_KEYFRAME, payload })
