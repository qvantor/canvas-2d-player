import * as constants from 'reducers/objects/objects.constants'
import * as timelineConstants from 'reducers/timeline/timeline.constants'
import { take, call, race } from 'redux-saga/effects'

import { canvas } from 'canvas/container'

export default function * () {
  while (true) {
    yield race({
      [constants.ADD_OBJ]: take(constants.ADD_OBJ)
      // [timelineConstants.TIMELINE_FRAME_SETTED]: take(timelineConstants.TIMELINE_FRAME_SETTED)
    })
    yield call([canvas, canvas.setInitialFrame])
  }
}
