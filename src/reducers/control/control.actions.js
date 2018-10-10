import * as constants from './control.constants'
import { store } from 'store'

const { dispatch } = store

export const select = objects => dispatch({ type: constants.CONTROL_SELECT, payload: objects })
export const selected = objects => dispatch({ type: constants.CONTROL_SELECTED, payload: objects })
export const deselected = () => dispatch({ type: constants.CONTROL_DESELECTED })
export const entered = () => dispatch({ type: constants.CONTROL_EDITING_ENTER })
export const exited = () => dispatch({ type: constants.CONTROL_EDITING_EXIT })

export const frameToggle = (id) => dispatch({ type: constants.CONTROL_OPEN_FRAMES_TOGGLE, payload: id })
export const openObjToggle = (id) => dispatch({ type: constants.CONTROL_OPEN_FRAMES_TOGGLE, payload: id })

export const setTool = (tool) => dispatch({ type: constants.CONTROL_SET_TOOL, payload: tool })
