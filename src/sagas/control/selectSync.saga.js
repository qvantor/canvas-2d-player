import { take, select, put } from 'redux-saga/effects'
import * as constants from 'reducers/control/control.constants'
import { setActiveObject } from 'canvas-fabric/utils'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.CONTROL_SELECT)
    if (!payload) continue
    setActiveObject(payload[0])

    const selected = yield select(({ control }) => control.selection)
    if (!selected || selected[0] !== payload[0]) {
      yield put({ type: constants.CONTROL_SELECTED, payload })
      setActiveObject(payload[0])
    }
  }
}
