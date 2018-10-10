import * as constants from 'reducers/masks/masks.constants'
import * as objConstants from 'reducers/objects/objects.constants'
import { findObj } from 'reducers/objects/objects.utils'
import { put, take, select } from 'redux-saga/effects'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.MASK_REMOVE)
    const { attached } = yield select(({ masks }) => masks[payload])
    const objects = yield select(({ objects }) => objects)
    if (!attached) continue
    for (let key of attached) {
      const obj = findObj(key, objects)
      if (obj) yield put({ type: objConstants.OBJ_PROPS_SETTED, payload: { id: key, params: { mask: null } } })
    }
    yield put({ type: constants.MASK_REMOVED, payload })
  }
}
