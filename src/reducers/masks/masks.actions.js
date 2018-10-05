import * as constants from './masks.constants'
import { store } from 'store'

const { dispatch } = store

export const cloneAsMask = (objId) =>
  dispatch({ type: constants.CLONE_AS_MASK, payload: objId })

export const setMaskParams = (id, params) =>
  dispatch({ type: constants.MASK_PARAMS_SETTED, payload: { id, params } })

// let i = 0
// setInterval(() => setMaskParams('12wedfxzs', { left: i++ }), 50)
