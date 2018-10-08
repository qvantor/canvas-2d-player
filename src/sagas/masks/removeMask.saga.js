import * as constants from 'reducers/masks/masks.constants'
import * as objConstants from 'reducers/objects/objects.constants'
import { put, take, select } from 'redux-saga/effects'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.MASK_REMOVE)
    const { attached } = yield select(({ masks }) => masks[payload])
    for (let key of attached) {
      yield put({ type: objConstants.OBJ_PROPS_SETTED, payload: { id: key, params: { mask: null } } })
    }
    yield put({ type: constants.MASK_REMOVED, payload })
  }
}
