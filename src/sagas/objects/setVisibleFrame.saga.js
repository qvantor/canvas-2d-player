import * as constants from 'reducers/objects/objects.constants'
import { findObj } from 'reducers/objects/objects.utils'
import { take, select, call, put } from 'redux-saga/effects'

export default function * () {
  while (true) {
    const { payload: { objId, keyId, value } } = yield take(constants.OBJ_VISIBLE_FRAME_SET)
    const objects = yield select(({ objects }) => objects.visible)
    const obj = yield call(findObj, objId, objects)
    // console.log(obj, keyId, value)

    const frames = obj.visible
    // const prevFrame = frames[keyId - 1]
    // const nextFrame = frames[keyId + 1]
    //
    // const collapseTime = 60

    yield put({
      type: constants.OBJ_VISIBLE_FRAME_SETTED,
      payload: { id: objId, frames: frames.update(keyId, item => [Math.round(value[0]), Math.round(value[1])]) }
    })

    // console.log(frame, prevFrame, nextFrame)

    // if (prevFrame && !nextFrame) {
    //   const diff = value[0] - prevFrame[1]
    //   if (diff < collapseTime) {
    //     const collapsedFrame = [prevFrame[0], value[1]]
    //     const newFrames = frames.map((item, id) => {
    //       if (id === keyId) return collapsedFrame
    //       return item
    //     }).filter((i, id) => id !== keyId - 1)
    //     yield put({ type: constants.OBJ_VISIBLE_FRAME_SETTED, payload: { id: objId, frames: newFrames } })
    //   } else {
    //     yield put({
    //       type: constants.OBJ_VISIBLE_FRAME_SETTED,
    //       payload: { id: objId, frames: frames.update(keyId, item => value) }
    //     })
    //   }
    // }
  }
}
