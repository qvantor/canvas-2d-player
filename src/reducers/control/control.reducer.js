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
    case constants.CONTROL_DRAG_ENTER:
      return state.merge({ dragEnter: payload })
    case constants.CONTROL_DRAG_ENDED:
      return state.merge({ drag: { dragging: false, type: null, target: null, data: null }, dragEnter: null })

    case constants.CONTROL_OPEN_SETTINGS:
      return state.merge({ settings: state.settings.merge({ open: true, view: payload }) })
    case constants.CONTROL_SETTINGS_SETTED:
      return state.merge({ settings: state.settings.merge(payload) })
    case constants.CONTROL_CLOSE_SETTINGS:
      return state.merge({ settings: state.settings.merge({ open: false }) })

    case constants.CONTROL_SET_COLORS:
      return state.merge({ colors: payload })

    case constants.CONTROL_VIEW_SCALE_SETTED:
      return state.merge({ viewScale: payload })
    default:
      return state
  }
}
