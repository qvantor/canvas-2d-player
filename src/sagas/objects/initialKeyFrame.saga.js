import { take, put, call, select } from 'redux-saga/effects'
import * as constants from 'reducers/objects/objects.constants'
import { findObj } from 'reducers/objects/objects.utils'

export default function * () {
  while (true) {
    const { payload: { id, key } } = yield take(constants.OBJ_KEYFRAME_ADD_PARAM)
    const objects = yield select(({ objects }) => objects)
    const obj = yield call(findObj, id, objects)
    yield put({ type: constants.OBJ_PROPS_SET, payload: { id, params: { [key]: obj.params[key] } } })
  }
}
