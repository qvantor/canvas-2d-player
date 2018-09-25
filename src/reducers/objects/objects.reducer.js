import * as constants from './objects.constants'
import Model from './objects.model'

const findNremove = (state, id) => {
  for (let item of state) {
    if (item.id === id) {
      return { state: state.filter(item => item.id !== id), model: item }
    }
    if (item.children) {
      const finded = findNremove(item.children, id)
      if (finded) {
        return {
          state: state.update(state.indexOf(item), item => item.merge({ children: finded.state })),
          model: finded.model
        }
      }
    }
  }
}

const recursivePushChild = (state, id, model) => {
  for (let item of state) {
    if (item.id === id) {
      return state.update(state.indexOf(item), item => item.merge({ children: [...item.children, model] }))
    } else if (item.children) {
      const newState = recursivePushChild(item.children, id, model)
      if (newState) return state.update(state.indexOf(item), item => item.merge({ children: newState }))
    }
  }
}

const recursiveReplace = (oldState, child, parent) => {
  const { model, state } = findNremove(oldState, child)
  return recursivePushChild(state, parent, model)
}

const recursiveToRoot = (oldState, id) => {
  const { model, state } = findNremove(oldState, id)
  return [...state, model]
}

const recursiveSetProp = merge => (state, id) => {
  for (let item of state) {
    if (item.id === id) {
      return state.update(state.indexOf(item), merge)
    } else if (item.children) {
      const newState = recursiveSetProp(item.children, id)
      if (newState) return state.update(state.indexOf(item), item => item.merge({ children: newState }))
    }
  }
}

export default function objects (state = Model, { type, payload }) {
  switch (type) {
    case constants.ADD_OBJ:
      return state.merge({ visible: [...state.visible, payload] })
    case constants.OBJ_MOVED:
      return state.merge({ visible: recursiveReplace(state.visible, payload.child, payload.parent) })
    case constants.OBJ_MOVED_ROOT:
      return state.merge({ visible: recursiveToRoot(state.visible, payload) })
    case constants.REMOVE_OBJ:
      return state.merge({ visible: findNremove(state.visible, payload).state })
    case constants.OBJ_PROPS_SETTED:
      return state.merge({
        visible: recursiveSetProp(item => item.merge({
          params: item.params.merge(payload.params, { deep: true })
        }))(state.visible, payload.id)
      })
    case constants.OBJ_VISIBLE_FRAME_SETTED:
      return state.merge({
        visible: recursiveSetProp(item => item.merge({
          visible: payload.frames
        }))(state.visible, payload.id)
      })

    case constants.OBJ_KEYFRAME_ADD_PARAM:
      return state.merge({
        visible: recursiveSetProp(item => item.merge({
          keyframes: item.keyframes.merge({ [payload.key]: { keys: [] } })
        }))(state.visible, payload.id)
      })

    case constants.OBJ_KEYFRAME_REMOVE_PARAM:
      return state.merge({
        visible: recursiveSetProp(item => item.merge({
          keyframes: item.keyframes.without(payload.key)
        }))(state.visible, payload.id)
      })

    case constants.OBJ_KEYFRAME_ADD:
      return state.merge({
        visible: recursiveSetProp(item => item.merge({
          keyframes: payload.newKeyFrames
        }))(state.visible, payload.id)
      })

    case constants.OBJ_KEYFRAME_TIME_SET:
      return state.merge({
        visible: recursiveSetProp(item =>
          item.merge({
            keyframes: item.keyframes.merge({
              [payload.key]: {
                keys: [...item.keyframes[payload.key].keys.update(
                  item.keyframes[payload.key].keys.findIndex(item => item[2] === payload.keyId),
                  frame => [payload.value, frame[1], frame[2]])]
                  .sort((a, b) => a[0] - b[0])
              }
            })
          }))(state.visible, payload.id)
      })

    case constants.OBJ_KEYFRAME_REMOVE:
      return state.merge({
        visible: recursiveSetProp(item =>
          item.merge({
            keyframes: item.keyframes.merge({
              [payload.key]: {
                keys: item.keyframes[payload.key].keys.filter((f, i) => i !== payload.keyId)
              }
            })
          }))(state.visible, payload.id)
      })
    default:
      return state
  }
}
