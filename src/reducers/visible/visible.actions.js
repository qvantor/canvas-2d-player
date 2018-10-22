import { store } from 'store/'
import * as constants from './visible.constants'

const { dispatch } = store

export const setVisible = (id, value) => dispatch({
  type: constants.FRAMES_UPDATE, payload: { id, value }
})
