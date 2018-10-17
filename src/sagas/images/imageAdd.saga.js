import { put, select, take, call, fork } from 'redux-saga/effects'
import * as constants from 'reducers/images/images.constants'
import { setParams } from 'reducers/images/images.actions'
import * as imgManager from 'reducers/images/images.manager'
import { addObject } from 'reducers/objects/objects.actions'
import { createImgObj } from 'reducers/objects/objects.utils'
import { id, types } from 'utils/'

const initialize = function * () {
  const images = yield select(({ images }) => images)
  for (let id in images) {
    yield call(imgManager.addImage, images[id])
    yield call(setParams, id, { loaded: true })
  }
}

const createImg = (url) => {
  return {
    id: id(types.IMAGE),
    url,
    objects: [],
    loaded: false
  }
}

export default function * () {
  yield fork(initialize)
  while (true) {
    const { payload } = yield take(constants.IMAGE_ADD)
    const img = yield call(createImg, payload)
    const imgObj = yield call(createImgObj, img.id)
    img.objects.push(imgObj.id)

    yield put({ type: constants.IMAGE_ADDED, payload: img })
    yield call(addObject, imgObj)

    yield call(imgManager.addImage, img)

    yield call(setParams, img.id, { loaded: true })
  }
}
