import * as constants from './masks.constants'
import { store } from 'store'

const { dispatch } = store

export const addMaskToObj = (objId, maskId) =>
  dispatch({ type: constants.ADD_MASK_TO_OBJ, payload: { objId, maskId } })

export const cloneAsMask = (objId) =>
  dispatch({ type: constants.CLONE_AS_MASK, payload: objId })

export const setMaskParams = (id, params) =>
  dispatch({ type: constants.MASK_PARAMS_SETTED, payload: { id, params } })

export const removeMask = (id) =>
  dispatch({ type: constants.MASK_REMOVE, payload: id })

// let i = 0
// setInterval(() => setMaskParams('12wedfxzs', { left: i++ }), 50)
