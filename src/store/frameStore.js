import { createStore, compose } from 'redux'
import { canvas } from 'canvas/container'
import * as mainStore from './'
import { getFramesSelection } from 'sagas/selectors'
import * as constants from 'reducers/timeline/timeline.constants'

const reducer = (state = 0, { type, payload }) => payload !== undefined ? payload : state

export const store = createStore(reducer, compose)

export const getState = store.getState
export const subscribe = store.subscribe

export const setPlayFrame = frame => {
  store.dispatch({ type: 'type', payload: frame })
  beforeFrameRender(frame)
}

export const setFrame = frame => {
  store.dispatch({ type: 'type', payload: frame })
  canvas.renderCurrentFrame()
}

export function beforeFrameRender (frame) {
  // @todo optimize somehow
  const state = mainStore.store.getState()
  const selection = getFramesSelection(state)
  if (frame > selection[1]) {
    const diff = (selection[1] - selection[0]) + selection[1]
    const newSelection = [0, 0]
    newSelection[0] = selection[1]
    newSelection[1] = diff
    mainStore.store.dispatch({ type: constants.TIMELINE_SELECTION_SETTED, payload: newSelection })
  } else if (frame < selection[0]) {
    const diff = selection[1] - selection[0]
    const newSelection = [0, 0]
    newSelection[0] = frame
    newSelection[1] = frame + diff
    mainStore.store.dispatch({ type: constants.TIMELINE_SELECTION_SETTED, payload: newSelection })
  }
}
