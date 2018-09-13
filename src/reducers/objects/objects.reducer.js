import * as constants from './objects.constants'
import Model from './objects.model'

export default function objects (state = Model, { type, payload }) {
  switch (type) {
    case constants.ADD_OBJ:
      return state.merge({ visible: [...state.visible, payload] })
    default:
      return state
  }
}
