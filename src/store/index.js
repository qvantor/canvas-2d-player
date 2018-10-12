import { createStore, compose, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga'
import Immutable from 'seamless-immutable'
import rootReducer from '../reducers'

export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [sagaMiddleware]
const enhancer = composeEnhancers(applyMiddleware(...middlewares),
  persistState(['objects', 'control', 'masks', 'images'], {
    deserialize: subset => {
      const data = JSON.parse(subset)
      for (let id in data.images) data.images[id].loaded = false
      return Immutable(data)
    }
  }))

export const store = createStore(rootReducer, enhancer)
