import { take, call } from 'redux-saga/effects'
import * as constants from 'reducers/images/images.constants'
import { createImgObj } from 'reducers/objects/objects.utils'
import { addObject } from 'reducers/objects/objects.actions'
import { addImageObj } from 'reducers/images/images.actions'
import { select } from 'reducers/control/control.actions'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.IMAGE_CLONE)
    const imgObj = yield call(createImgObj, payload.imgId, payload.params)
    yield call(addObject, imgObj)
    yield call(addImageObj, payload.imgId, imgObj.id)
    yield call(select, [imgObj.id])
  }
}
