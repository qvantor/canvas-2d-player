import * as constants from 'reducers/objects/objects.constants'
import { call, select, take, put } from 'redux-saga/effects'
import { findObj } from 'reducers/objects/objects.utils'
import { id as idGen, calcParams } from 'utils/'

// @todo maybe BEFORE middleware helps
export default function * () {
  while (true) {
    const { payload: { id, params } } = yield take(constants.OBJ_PROPS_SET)
    if (!id) continue
    const objects = yield select(({ objects }) => objects)
    const { frame } = yield select(({ timeline }) => timeline)
    const obj = yield call(findObj, id, objects)
    const { keyframes } = obj
    const oldParams = calcParams(keyframes, frame)

    const newKeyFrames = {}
    let changes = false
    for (let key in keyframes) {
      if (params[key] !== undefined && oldParams[key] !== params[key]) {
        const newKeyFrame = [frame, params[key], idGen()]
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
