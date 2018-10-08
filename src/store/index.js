import { createStore, compose, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga'
import Immutable from 'seamless-immutable'
import rootReducer from '../reducers'

export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [sagaMiddleware]
const enhancer = composeEnhancers(applyMiddleware(...middlewares),
  persistState(['objects', 'control', 'masks'], { deserialize: subset => Immutable(JSON.parse(subset)) }))

export const store = createStore(rootReducer, enhancer)
