import * as constants from 'reducers/visible/visible.constants'
import { removeVisible } from 'reducers/visible/visible.actions'
import * as objConstants from 'reducers/objects/objects.constants'
import { take, put, select, fork, call } from 'redux-saga/effects'

import { getFrames, getVisible, getObjOrder } from 'sagas/selectors'
import { BEFORE } from 'store/beforeMiddleware'

const checkVisible = (key, frame) => key[0] <= frame && key[1] >= frame

const calcCache = (cache, newObj, frames, order) => {
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
    updatedCache[i] = updatedCache[i].asMutable
      ? updatedCache[i].asMutable().sort((a, b) => order.indexOf(a) - order.indexOf(b))
      : updatedCache[i].sort((a, b) => order.indexOf(a) - order.indexOf(b))
  }
  return updatedCache
}

const removeFromCache = (cache, objId, frames) => {
  const updatedCache = []
  for (let i = 0; i <= frames; i++) {
    const index = cache[i].indexOf(objId)
    if (index !== -1) {
      updatedCache[i] = cache[i].filter((o, i) => i !== index)
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
    const ordering = yield select(getObjOrder)
    const newObj = { id: payload.id, keys: [0, frames] }
    // @todo [OPTIMIZATION] calcCache should be async in worker/on calculate live
    const cache = calcCache(visible.cache, newObj, frames, ordering)

    yield put({
      type: constants.VISIBLE_FRAMES_UPDATED,
      payload: { id: newObj.id, keys: newObj.keys, cache }
    })
  }
}

function * remove () {
  while (true) {
    const { payload } = yield take(BEFORE + objConstants.REMOVE_OBJ)
    const frames = yield select(getFrames)
    const visible = yield select(getVisible)
    const cache = removeFromCache(visible.cache, payload, frames)

    yield call(removeVisible, payload, cache)
  }
}

function * update () {
  while (true) {
    const { payload } = yield take(constants.VISIBLE_FRAMES_UPDATE)

    const frames = yield select(getFrames)
    const visible = yield select(getVisible)
    const ordering = yield select(getObjOrder)
    const newObj = { id: payload.id, keys: [Math.round(payload.value[0]), Math.round(payload.value[1])] }
    const cache = calcCache(visible.cache, newObj, frames, ordering)

    yield put({
      type: constants.VISIBLE_FRAMES_UPDATED,
      payload: { id: newObj.id, keys: newObj.keys, cache }
    })
  }
}

export default function * () {
  yield fork(add)
  yield fork(update)
  yield fork(remove)
}
