import * as constants from './objects.constants'
import { store } from 'store'

const { dispatch } = store

export const addObject = (obj) => dispatch({ type: constants.ADD_OBJ, payload: obj })
export const setParams = (id, params) => dispatch({ type: constants.OBJ_SET_PROPS, payload: { id, params } })
