import { createStore, compose, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga'
import Immutable from 'seamless-immutable'
import rootReducer from '../reducers'
import demo from 'assets/demo'

import beforeMiddleware from './beforeMiddleware'

import * as frameStore from './frameStore'

export { frameStore }

export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [beforeMiddleware, sagaMiddleware]

const enhancer = composeEnhancers(applyMiddleware(...middlewares),
  persistState([
    'objects',
    'control',
    'masks',
    'images',
    'visible',
    'objOrder',
    'timeline'], {
    deserialize: subset => {
      const data = JSON.parse(subset) || demo
      for (let id in data.images) data.images[id].loaded = false
      data.control.selection = null
      return Immutable(data)
    }
  }))

export const store = createStore(rootReducer, enhancer)
