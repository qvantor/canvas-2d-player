import * as constants from './control.constants'
import { store } from 'store'

const { dispatch } = store

export const selected = objects => dispatch({ type: constants.CONTROL_SELECTED, payload: objects })
export const deselected = () => dispatch({ type: constants.CONTROL_DESELECTED })
