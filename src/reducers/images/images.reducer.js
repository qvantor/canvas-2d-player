import * as constants from './images.constants'
import Model from './images.model'

export default function images (state = Model, { type, payload }) {
  switch (type) {
    case constants.IMAGE_ADDED:
      return state.merge({ [payload.id]: payload })
    case constants.IMAGE_OBJECT_ADDED:
      return state.merge({
        [payload.id]: state[payload.id].merge({ objects: [...state[payload.id].objects, payload.object] })
      })
    case constants.IMAGE_OBJECT_REMOVE:
      return state.merge({
        [payload.id]: state[payload.id].merge({
          objects: state[payload.id].objects.filter(item => item !== payload.object)
        })
      })
    case constants.IMAGE_PARAM_SETTED:
      return state.merge({ [payload.id]: state[payload.id].merge(payload.params) })
    case constants.IMAGE_REMOVE:
      return state.without(payload)
    default:
      return state
  }
}
