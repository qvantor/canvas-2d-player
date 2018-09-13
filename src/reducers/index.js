import { combineReducers } from 'redux'

import config from './config/config.reducer'
import objects from './objects/objects.reducer'
import control from './control/control.reducer'

export default combineReducers({
  config,
  objects,
  control
})
