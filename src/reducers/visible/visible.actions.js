import { store } from 'store/'
import * as constants from './visible.constants'

const { dispatch } = store

export const setVisible = (id, value) => dispatch({
  type: constants.VISIBLE_FRAMES_UPDATE, payload: { id, value }
})

export const removeVisible = (id, cache) => dispatch({
  type: constants.VISIBLE_FRAMES_REMOVED, payload: { id, cache }
})
