import { put, select } from 'redux-saga/effects'
import { getObjOrder, getVisibleCache } from '../selectors'
import * as constants from 'reducers/visible/visible.constants'

export function * objCacheReorder () {
  const order = yield select(getObjOrder)
  const cache = yield select(getVisibleCache)
  const newCache = []
  for (let i = 0; i < cache.length; i++) {
    newCache[i] = cache[i].asMutable().sort((a, b) => order.indexOf(a) - order.indexOf(b))
  }
  yield put({ type: constants.VISIBLE_FRAMES_CACHE_UPDATED, payload: newCache })
}
