import * as constants from './control.constants'
import Model from './control.model'

export default function control (state = Model, { type, payload }) {
  switch (type) {
    case constants.CONTROL_DESELECTED:
      return state.merge({ selection: null, lastSelected: state.selection })
    case constants.CONTROL_SELECTED:
      return state.merge({ selection: payload })
    case constants.CONTROL_EDITING_ENTER:
      return state.merge({ textEditing: true })
    case constants.CONTROL_EDITING_EXIT:
      return state.merge({ textEditing: false })
    case constants.CONTROL_OPEN_FRAMES_TOGGLE:
      return state.merge({
        openFrames: state.openFrames.indexOf(payload) === -1
          ? [...state.openFrames, payload]
          : state.openFrames.filter(item => item !== payload)
      })
    case constants.CONTROL_SET_TOOL:
      return state.merge({ tool: payload })
    default:
      return state
  }
}
