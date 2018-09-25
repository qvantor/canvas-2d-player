import * as constants from 'reducers/objects/objects.constants'
import { call, select, take, put } from 'redux-saga/es/effects'
import { findObj } from 'reducers/objects/objects.utils'
import { calcParams } from 'canvas-fabric/components/Objects/animate'
import { round } from 'utils/'
import idGen from 'utils/id'

export default function * () {
  while (true) {
    const { payload: { id, params } } = yield take(constants.OBJ_PROPS_SET)
    const objects = yield select(({ objects }) => objects.visible)
    const { time } = yield select(({ timeline }) => timeline)
    const obj = yield call(findObj, id, objects)
    const { keyframes } = obj
    const oldParams = calcParams(keyframes, time)

    const newKeyFrames = {}
    let changes = false
    for (let key in keyframes) {
      if (params[key] !== undefined && oldParams[key] !== params[key]) {
        const newKeyFrame = [round(time), params[key], idGen()]
        const sameTimeFrame = keyframes[key].keys.find((item) => item[0] === newKeyFrame[0])
        if (sameTimeFrame) {
          newKeyFrames[key] = {
            keys: keyframes[key].keys.update(
              keyframes[key].keys.indexOf(sameTimeFrame),
              () => newKeyFrame)
          }
        } else {
          newKeyFrames[key] = {
            keys: [...keyframes[key].keys, newKeyFrame].sort((a, b) => a[0] - b[0])
          }
        }
        changes = true
      } else {
        newKeyFrames[key] = {
          keys: keyframes[key].keys
        }
      }
    }

    if (changes) yield put({ type: constants.OBJ_KEYFRAME_ADD, payload: { id, newKeyFrames } })
    yield put({ type: constants.OBJ_PROPS_SETTED, payload: { id, params } })
  }
}
