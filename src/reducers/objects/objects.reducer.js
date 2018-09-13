import * as constants from './objects.constants'
import Model from './objects.model'

export default function objects (state = Model, { type, payload }) {
  switch (type) {
    case constants.ADD_OBJ:
      return state.merge({ visible: [...state.visible, payload] })
    case constants.OBJ_SET_PROPS:
      return state.merge({
        visible: state.visible.update(
          state.visible.findIndex(item => item.id === payload.id),
          item => item.merge({ params: item.params.merge(payload.params) }))
      })
    default:
      return state
  }
}
