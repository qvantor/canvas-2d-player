import { select, take } from 'redux-saga/es/effects'
import * as constants from 'reducers/objects/objects.constants'
import { setTime } from 'reducers/timeline/timeline.actions'

export function * nextKeyframe () {
  while (true) {
    const {payload} = yield take(constants.NEXT_KEYFRAME)
    const {time} = yield select(({timeline}) => timeline)
    const nextFrame = payload.find(item => item[0] > time)
    if (nextFrame) setTime(nextFrame[0])
  }
}

export function * prevKeyframe () {
  while (true) {
    const {payload} = yield take(constants.PREV_KEYFRAME)
    const {time} = yield select(({timeline}) => timeline)
    const nextFrameIndex = payload.findIndex(item => item[0] >= time)
    const prevFrame = payload[nextFrameIndex - 1]
    if (prevFrame) setTime(prevFrame[0])
    else if (nextFrameIndex === -1) setTime(payload[payload.length - 1][0])
  }
}
