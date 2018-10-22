import * as constants from 'reducers/visible/visible.constants'
import * as objConstants from 'reducers/objects/objects.constants'
import { take, put, select, fork } from 'redux-saga/effects'

import { getFrames, getVisible } from 'sagas/selectors'

const checkVisible = (key, frame) => key[0] <= frame && key[1] >= frame

const calcCache = (cache, newObj, frames) => {
  const updatedCache = []
  for (let i = 0; i <= frames; i++) {
    const itemVisible = checkVisible(newObj.keys, i)
    if (!cache[i]) {
      updatedCache[i] = itemVisible ? [newObj.id] : []
      continue
    }

    const itemIndex = cache[i].indexOf(newObj.id)
    if (itemVisible && itemIndex === -1) {
      updatedCache[i] = [...cache[i], newObj.id]
    } else if (!itemVisible && itemIndex !== -1) {
      updatedCache[i] = cache[i].filter(item => item !== newObj.id)
    } else {
      updatedCache[i] = cache[i]
    }
  }
  return updatedCache
}

function * add () {
  while (true) {
    const { payload } = yield take(objConstants.ADD_OBJ)
    const frames = yield select(getFrames)
    const visible = yield select(getVisible)
    const newObj = { id: payload.id, keys: [0, frames] }
    // @todo [OPTIMIZATION] calcCache should be async in worker/on calculate live
    const cache = calcCache(visible.cache, newObj, frames)

    yield put({
      type: constants.FRAMES_UPDATED,
      payload: { id: newObj.id, keys: newObj.keys, cache }
    })
  }
}

function * update () {
  while (true) {
    const { payload } = yield take(constants.FRAMES_UPDATE)
    console.log(payload)

    const frames = yield select(getFrames)
    const visible = yield select(getVisible)
    const newObj = { id: payload.id, keys: [Math.round(payload.value[0]), Math.round(payload.value[1])] }
    const cache = calcCache(visible.cache, newObj, frames)

    yield put({
      type: constants.FRAMES_UPDATED,
      payload: { id: newObj.id, keys: newObj.keys, cache }
    })
  }
}

export default function * () {
  yield fork(add)
  yield fork(update)
}
