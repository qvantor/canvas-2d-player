import * as constants from './control.constants'
import Model from './control.model'

export default function control (state = Model, { type, payload }) {
  switch (type) {
    case constants.CONTROL_DESELECTED:
      return state.merge({ selection: null, lastSelected: state.selection })
    case constants.CONTROL_SELECTED:
      return state.merge({ selection: payload })
    case constants.CONTROL_OPEN_FRAMES_TOGGLE:
      return state.merge({
        openFrames: state.openFrames.indexOf(payload) === -1
          ? [...state.openFrames, payload]
          : state.openFrames.filter(item => item !== payload)
      })
    case constants.CONTROL_OPEN_OBJ_TOGGLE:
      return state.merge({
        openObjects: state.openObjects.indexOf(payload) === -1
          ? [...state.openObjects, payload]
          : state.openObjects.filter(item => item !== payload)
      })
    case constants.CONTROL_SET_TOOL:
      return state.merge({ tool: payload })

    case constants.CONTROL_DRAG_STARTED:
      return state.merge({ drag: { dragging: true, type: payload.type, target: payload.target, data: payload.data } })
    case constants.CONTROL_DRAG_ENDED:
      return state.merge({ drag: { dragging: false, type: null, target: null, data: null } })
    default:
      return state
  }
}
