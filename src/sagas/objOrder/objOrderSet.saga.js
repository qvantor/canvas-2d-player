import Immutable from 'seamless-immutable'
import * as objConstants from 'reducers/objects/objects.constants'
import * as constants from 'reducers/objOrder/objOrder.constants'
import { BEFORE } from 'store/beforeMiddleware'
import { take, fork, call, select, put } from 'redux-saga/effects'
import { objOrderAdd, objOrderRemove } from 'reducers/objOrder/objOrder.actions'
import { getObjOrder } from '../selectors'

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
    const { payload } = yield take(constants.OBJ_ORDER_REORDER)
    const objOrder = yield select(getObjOrder)
    const newOrder = Immutable.flatMap(objOrder, (item, i) => {
      if (payload.last && i === objOrder.length - 1) return item === payload.objId ? item : [item, payload.objId]
      if (item === payload.objId) return []
      if (item === payload.aboveId) return [payload.objId, item]
      if (item === payload.belowId) return [item, payload.objId]
      return item
    })
    yield put({ type: constants.OBJ_ORDER_REORDERED, payload: newOrder })
    yield call(objCacheReorder)
  }
}

export default function * () {
  yield fork(add)
  yield fork(reorder)
  yield fork(remove)
}
