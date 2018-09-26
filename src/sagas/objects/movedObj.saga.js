import { take } from 'redux-saga/effects'
import * as constants from 'reducers/objects/objects.constants'

export const moveToRoot = function * () {
  while (true) {
    // take before moved to root
    // find parent and child
    // parent.calcTransformMatrix and save child params
    // move object to root
    // set child params
    const { payload } = yield take(constants.OBJ_MOVED_ROOT)
    //
    console.log(payload)
  }
}

export const moved = function * () {
  while (true) {
    // after object moved to group
    // get from canvas and set to store object parameters
    const { payload } = yield take(constants.OBJ_MOVED)
  }
}