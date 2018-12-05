import * as constants from './objOrder.constants'
import Model from './objOrder.model'
import Immutable from 'seamless-immutable'

export default function objOrder (state = Model, { type, payload }) {
  switch (type) {
    case constants.OBJ_ORDER_ADDED:
      return Immutable([...state, payload])
    case constants.OBJ_ORDER_REORDER:
      return Immutable.flatMap(state, item => {
        if (item === payload.objId) return []
        if (item === payload.aboveId) return [payload.objId, item]
        return item
      })
    case constants.OBJ_ORDER_REMOVED:
      return state.filter(item => item !== payload)
    default:
      return state
  }
}
