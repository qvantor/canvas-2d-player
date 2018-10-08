import * as constants from './masks.constants'
import Model from './masks.model'

export default function mask (state = Model, { type, payload }) {
  switch (type) {
    case constants.MASK_ADDED:
      return state.merge({ [payload.id]: payload })
    case constants.MASK_PARAMS_SETTED:
      return state.merge({ [payload.id]: state[payload.id].merge({ params: payload.params }, { deep: true }) })
    case constants.MASK_ATTACHED:
      return state.merge({
        [payload.id]: state[payload.id].merge({ attached: [...state[payload.id].attached, payload.objId] })
      })
    case constants.MASK_REMOVED:
      return state.without(payload)
    default:
      return state
  }
}
