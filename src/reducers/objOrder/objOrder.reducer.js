import * as constants from './objOrder.constants'
import Model from './objOrder.model'
import Immutable from 'seamless-immutable'

export default function objOrder (state = Model, { type, payload }) {
  switch (type) {
    case constants.OBJ_ORDER_ADDED:
      return Immutable([...state, payload])
    case constants.OBJ_ORDER_REORDERED:
      return Immutable(payload)
    case constants.OBJ_ORDER_REMOVED:
      return state.filter(item => item !== payload)
    default:
      return state
  }
}
