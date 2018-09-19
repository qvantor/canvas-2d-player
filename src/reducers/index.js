import { combineReducers } from 'redux'

import config from './config/config.reducer'
import objects from './objects/objects.reducer'
import objTypes from './objTypes/objTypes.reducer'
import control from './control/control.reducer'
import timeline from './timeline/timeline.reducer'

export default combineReducers({
  config,
  objects,
  objTypes,
  control,
  timeline
})
