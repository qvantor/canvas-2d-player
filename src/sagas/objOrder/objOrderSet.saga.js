import * as objConstants from 'reducers/objects/objects.constants'
import * as constants from 'reducers/objOrder/objOrder.constants'
import { BEFORE } from 'store/beforeMiddleware'
import { take, fork, call } from 'redux-saga/effects'
import { objOrderAdd, objOrderRemove } from 'reducers/objOrder/objOrder.actions'

import { objCacheReorder } from '../visible'

function * add () {
  while (true) {
    const { payload } = yield take(objConstants.ADD_OBJ)
    yield call(objOrderAdd, payload.id)
  }
}

function * remove () {
  while (true) {
    const { payload } = yield take(BEFORE + objConstants.REMOVE_OBJ)
    yield call(objOrderRemove, payload)
  }
}

function * reorder () {
  while (true) {
    yield take(constants.OBJ_ORDER_REORDER)
    yield call(objCacheReorder)
  }
}

export default function * () {
  yield fork(add)
  yield fork(reorder)
  yield fork(remove)
}
