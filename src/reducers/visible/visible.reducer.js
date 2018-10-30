import * as constants from './visible.constants'
import Model from './visible.model'

export default function visible (state = Model, { type, payload }) {
  switch (type) {
    case constants.VISIBLE_FRAMES_UPDATED:
      return state.merge({
        keys: state.keys.merge({ [payload.id]: payload.keys }),
        cache: payload.cache
      })
    case constants.VISIBLE_FRAMES_REMOVED:
      return state.merge({
        keys: state.keys.without(payload.id),
        cache: payload.cache
      })
    default:
      return state
  }
}
