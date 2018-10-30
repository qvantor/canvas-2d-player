import * as constants from './objects.constants'
import Model from './objects.model'

export default function objects (state = Model, { type, payload }) {
  switch (type) {
    case constants.ADD_OBJ:
      return state.merge({ [payload.id]: payload })
    case constants.REMOVE_OBJ:
      return state.without(payload)
    // case constants.OBJ_MOVED:
    //   return recursiveReplace(state, payload.child, payload.parent)
    // case constants.OBJ_MOVED_ROOT:
    //   return recursiveToRoot(state, payload)
    case constants.OBJ_PROPS_SETTED:
      return state.merge({
        [payload.id]: state[payload.id].merge({
          params: state[payload.id].params.merge(payload.params, { deep: true })
        })
      })
    case constants.OBJ_KEYFRAME_ADD_PARAM:
      return state.merge({
        [payload.id]: state[payload.id].merge({
          keyframes: state[payload.id].keyframes.merge({ [payload.key]: { keys: [] } })
        })
      })
    case constants.OBJ_KEYFRAME_REMOVE_PARAM:
      return state.merge({
        [payload.id]: state[payload.id].merge({
          keyframes: state[payload.id].keyframes.without(payload.key)
        })
      })
    case constants.OBJ_KEYFRAME_ADD:
      return state.merge({
        [payload.id]: state[payload.id].merge({
          keyframes: payload.newKeyFrames
        })
      })
    case constants.OBJ_KEYFRAME_TIME_SET:
      return state.merge({
        [payload.id]: state[payload.id].merge({
          keyframes: state[payload.id].keyframes.merge({
            [payload.key]: {
              keys: [...state[payload.id].keyframes[payload.key].keys.update(
                state[payload.id].keyframes[payload.key].keys.findIndex(item => item[2] === payload.keyId),
                frame => [payload.value, frame[1], frame[2]])]
                .sort((a, b) => a[0] - b[0])
            }
          })
        })
      })
    case constants.OBJ_KEYFRAME_REMOVE:
      return state.merge({
        [payload.id]: state[payload.id].merge({
          keyframes: state[payload.id].keyframes.merge({
            [payload.key]: {
              keys: state[payload.id].keyframes[payload.key].keys.filter((f, i) => i !== payload.keyId)
            }
          })
        })
      })
    default:
      return state
  }
}
