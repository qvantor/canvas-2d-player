import { combineReducers } from 'redux'

import objects from './objects/objects.reducer'
import objTypes from './objTypes/objTypes.reducer'
import control from './control/control.reducer'
import timeline from './timeline/timeline.reducer'
import masks from './masks/masks.reducer'
import images from './images/images.reducer'
import visible from './visible/visible.reducer'
import objOrder from './objOrder/objOrder.reducer'

export default combineReducers({
  objects,
  objTypes,
  control,
  timeline,
  masks,
  images,
  visible,
  objOrder
})
