import * as constants from './images.constants'
import { store } from 'store'

const { dispatch } = store

export const addImage = img => dispatch({ type: constants.IMAGE_ADD, payload: img })
export const setParams = (id, params) => dispatch({ type: constants.IMAGE_PARAM_SETTED, payload: { id, params } })

export const removeImage = (id, object) => dispatch({ type: constants.IMAGE_OBJECT_REMOVE, payload: { id, object } })
