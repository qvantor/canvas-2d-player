import * as constants from './visible.constants'
import Model from './visible.model'

export default function visible (state = Model, { type, payload }) {
  switch (type) {
    case constants.FRAMES_UPDATED:
      return state.merge({
        keys: state.keys.merge({ [payload.id]: payload.keys }),
        cache: payload.cache
      })
    default:
      return state
  }
}
