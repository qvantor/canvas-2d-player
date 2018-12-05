import { store } from 'store/'
import * as constants from './objOrder.constants'

const { dispatch } = store

export const objOrderAdd = (payload) => dispatch({ type: constants.OBJ_ORDER_ADDED, payload })
export const objReorder = (objId, aboveId) =>
  dispatch({ type: constants.OBJ_ORDER_REORDER, payload: { objId, aboveId } })
export const objOrderRemove = (payload) => dispatch({ type: constants.OBJ_ORDER_REMOVED, payload })
