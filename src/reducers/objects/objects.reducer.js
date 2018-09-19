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

const recursiveSetProp = (state, id, prop) => {
  for (let item of state) {
    if (item.id === id) {
      return state.update(state.indexOf(item), item => item.merge({ params: item.params.merge(prop) }))
    } else if (item.children) {
      const newState = recursiveSetProp(item.children, id, prop)
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
    case constants.OBJ_SET_PROPS:
      return state.merge({ visible: recursiveSetProp(state.visible, payload.id, payload.params) })
    default:
      return state
  }
}
