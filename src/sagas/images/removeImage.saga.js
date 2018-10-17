import { take, call, select } from 'redux-saga/effects'
import * as constants from 'reducers/images/images.constants'
import { removeObject } from 'reducers/objects/objects.actions'
import { getImages } from '../selectors'
import { BEFORE } from 'store/beforeMiddleware'

export default function * () {
  while (true) {
    const { payload } = yield take(BEFORE + constants.IMAGE_REMOVE)
    const images = yield select(getImages)
    for (let key of images[payload].objects) {
      yield call(removeObject, key)
    }
  }
}
