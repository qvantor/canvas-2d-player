import { select, take } from 'redux-saga/es/effects'
import * as constants from 'reducers/objects/objects.constants'
import { frameStore } from 'store'

const { setFrame } = frameStore

export function * nextKeyframe () {
  while (true) {
    const { payload } = yield take(constants.NEXT_KEYFRAME)
    const frame = frameStore.getState()
    const nextFrame = payload.find(item => item[0] > frame)
    if (nextFrame) setFrame(nextFrame[0])
  }
}

export function * prevKeyframe () {
  while (true) {
    const { payload } = yield take(constants.PREV_KEYFRAME)
    const frame = frameStore.getState()
    const nextFrameIndex = payload.findIndex(item => item[0] >= frame)
    const prevFrame = payload[nextFrameIndex - 1]
    if (prevFrame) setFrame(prevFrame[0])
    else if (nextFrameIndex === -1) setFrame(payload[payload.length - 1][0])
  }
}
