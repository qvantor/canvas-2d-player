import * as constants from './project.constants'
import Model from './project.model'

export default function project (state = Model, { type, payload }) {
  switch (type) {
    case constants.PROJECT_PARAM_SETTED:
      return state.merge(payload)
    default:
      return state
  }
}
