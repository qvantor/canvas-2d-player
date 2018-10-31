import * as constants from './control.constants'
import { store } from 'store'

const { dispatch } = store

export const select = objects => dispatch({ type: constants.CONTROL_SELECT, payload: objects })
export const selected = objects => dispatch({ type: constants.CONTROL_SELECTED, payload: objects })
export const deselected = () => dispatch({ type: constants.CONTROL_DESELECTED })

export const frameToggle = (id) => dispatch({ type: constants.CONTROL_OPEN_FRAMES_TOGGLE, payload: id })

export const setTool = (tool) => dispatch({ type: constants.CONTROL_SET_TOOL, payload: tool })

export const dragStart = (type, target, data) => dispatch({
  type: constants.CONTROL_DRAG_STARTED,
  payload: { type, target, data }
})
export const dragEnd = () => dispatch({ type: constants.CONTROL_DRAG_ENDED })

export const setColors = colors => dispatch({ type: constants.CONTROL_SET_COLORS, payload: colors })
