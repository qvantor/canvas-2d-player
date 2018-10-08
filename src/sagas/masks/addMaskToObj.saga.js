import * as constants from 'reducers/masks/masks.constants'
import * as objConstants from 'reducers/objects/objects.constants'
import { take, put } from 'redux-saga/effects'

export default function * () {
  while (true) {
    const { payload: { maskId, objId } } = yield take(constants.ADD_MASK_TO_OBJ)
    yield put({ type: constants.MASK_ATTACHED, payload: { id: maskId, objId } })
    yield put({ type: objConstants.OBJ_PROPS_SETTED, payload: { id: objId, params: { mask: maskId } } })
  }
}
