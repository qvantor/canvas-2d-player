import { take, call, select, put } from 'redux-saga/effects'
import * as constants from 'reducers/objects/objects.constants'
import { findObj } from 'reducers/objects/objects.utils'
import idGen from 'utils/id'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.OBJ_CLONE)
    const objects = yield select(({ objects }) => objects)
    const obj = yield call(findObj, payload, objects)
    yield put({
      type: constants.ADD_OBJ,
      payload: obj.merge({
        id: idGen(),
        name: `${obj.name} clone`
      })
    })
  }
}
