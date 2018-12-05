import { take, put, select } from 'redux-saga/effects'
import { getObjOrder, getVisibleCache } from '../selectors'

export function * objCacheReorder () {
  const order = yield select(getObjOrder)
  const cache = yield select(getVisibleCache)
  console.log(order, cache, cache.asMutable().sort((a, b) => order.indexOf(a) - order.indexOf(b)))
}
