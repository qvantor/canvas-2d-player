import * as constants from './timeline.constants'
import Model from './timeline.model'

export default function timeline (state = Model, { type, payload }) {
  switch (type) {
    case constants.TIMELINE_PLAY:
      return state.merge({ play: true })
    case constants.TIMELINE_PAUSE:
      return state.merge({ play: false })
    case constants.TIMELINE_SELECTION_SETTED:
      return state.merge({ selection: payload })
    default:
      return state
  }
}
