import { store } from 'store/'
import * as constants from './project.constants'

const { dispatch } = store

export const projectParamsSet = (payload) => dispatch({ type: constants.PROJECT_PARAM_SETTED, payload })
