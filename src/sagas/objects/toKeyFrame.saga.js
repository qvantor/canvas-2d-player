import { select, take } from 'redux-saga/es/effects'
import * as constants from 'reducers/objects/objects.constants'
import { setFrame } from 'reducers/timeline/timeline.actions'

export function * nextKeyframe () {
  while (true) {
    const { payload } = yield take(constants.NEXT_KEYFRAME)
    const { frame } = yield select(({ timeline }) => timeline)
    const nextFrame = payload.find(item => item[0] > frame)
    if (nextFrame) setFrame(nextFrame[0])
  }
}

export function * prevKeyframe () {
  while (true) {
    const { payload } = yield take(constants.PREV_KEYFRAME)
    const { frame } = yield select(({ timeline }) => timeline)
    const nextFrameIndex = payload.findIndex(item => item[0] >= frame)
    const prevFrame = payload[nextFrameIndex - 1]
    if (prevFrame) setFrame(prevFrame[0])
    else if (nextFrameIndex === -1) setFrame(payload[payload.length - 1][0])
  }
}
