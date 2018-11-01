import { createStore, compose } from 'redux'
import { canvas } from 'canvas/container'

function reducer (state = 0, { type, payload }) {
  return payload !== undefined ? payload : state
}

export const store = createStore(reducer, compose)

export const getState = store.getState
export const subscribe = store.subscribe

export const setPlayFrame = frame => store.dispatch({ type: 'type', payload: frame })

export const setFrame = frame => {
  store.dispatch({ type: 'type', payload: frame })
  canvas.renderCurrentFrame()
}
