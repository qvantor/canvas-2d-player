import * as constants from './control.constants'
import Model from './control.model'

export default function control (state = Model, { type, payload }) {
  switch (type) {
    case constants.CONTROL_DESELECTED:
      return state.merge({ selection: null })
    case constants.CONTROL_SELECTED:
      return state.merge({ selection: payload })
    default:
      return state
  }
}
