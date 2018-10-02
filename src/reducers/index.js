import { combineReducers } from 'redux'

import objects from './objects/objects.reducer'
import objTypes from './objTypes/objTypes.reducer'
import control from './control/control.reducer'
import timeline from './timeline/timeline.reducer'
import masks from './masks/masks.reducer'

export default combineReducers({
  objects,
  objTypes,
  control,
  timeline,
  masks
})
