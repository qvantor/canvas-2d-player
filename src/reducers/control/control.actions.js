import * as constants from './control.constants'
import { store } from 'store'

const { dispatch } = store

export const selected = objects => dispatch({ type: constants.CONTROL_SELECTED, payload: objects })
export const deselected = () => dispatch({ type: constants.CONTROL_DESELECTED })
export const entered = () => dispatch({ type: constants.CONTROL_EDITING_ENTER })
export const exited = () => dispatch({ type: constants.CONTROL_EDITING_EXIT })

export const frameToggle = (id) => dispatch({ type: constants.CONTROL_OPEN_FRAMES_TOGGLE, payload: id })
