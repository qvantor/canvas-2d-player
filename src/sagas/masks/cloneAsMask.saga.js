import { select, take, put } from 'redux-saga/effects'
import * as constants from 'reducers/masks/masks.constants'
import { findObj, setPropToAll } from 'reducers/objects/objects.utils'
import { id, types } from 'utils/'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.CLONE_AS_MASK)
    const objects = yield select(({ objects }) => objects)
    const obj = findObj(payload, objects)
    const maskId = id(types.MASK)
    yield put({
      type: constants.MASK_ADDED,
      payload: {
        name: 'Mask',
        id: maskId,
        attached: [],
        params: {
          absolutePositioned: true,
          inverted: false
        },
        objects: [],
        children: setPropToAll(item => item.merge({ id: id() }))([obj])
      }
    })
  }
}
