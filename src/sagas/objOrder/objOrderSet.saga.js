import * as objConstants from 'reducers/objects/objects.constants'
import { BEFORE } from 'store/beforeMiddleware'
import { take, fork, call } from 'redux-saga/effects'
import { objOrderAdd, objOrderRemove } from 'reducers/objOrder/objOrder.actions'

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

export default function * () {
  yield fork(add)
  yield fork(remove)
}
