import { select, take, call } from 'redux-saga/effects'
import * as constants from 'reducers/objects/objects.constants'
import { removeImage } from 'reducers/images/images.actions'
import { findObj } from 'reducers/objects/objects.utils'
import { BEFORE } from 'store/beforeMiddleware'

export default function * () {
  while (true) {
    const { payload } = yield take(BEFORE + constants.REMOVE_OBJ)
    const objects = yield select(({ objects }) => objects)
    const obj = yield call(findObj, payload, objects)
    if (!obj || obj.type !== 'img') continue
    yield call(removeImage, obj.imgId, obj.id)
  }
}
