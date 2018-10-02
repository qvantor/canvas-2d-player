import * as constants from './masks.constants'
import Model from './masks.model'

export default function mask (state = Model, { type, payload }) {
  switch (type) {
    case constants.MASK_PARAMS_SETTED:
      return state.merge({ [payload.id]: state[payload.id].merge({ params: payload.params }, { deep: true }) })
    default:
      return state
  }
}
