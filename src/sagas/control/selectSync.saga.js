import { take, select, put } from 'redux-saga/effects'
import * as constants from 'reducers/control/control.constants'
import { canvas } from 'canvas/container'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.CONTROL_SELECT)
    if (!payload) continue
    canvas.selectObject(payload[0])

    const selected = yield select(({ control }) => control.selection)
    if (!selected || selected[0] !== payload[0]) {
      yield put({ type: constants.CONTROL_SELECTED, payload })
      canvas.selectObject(payload[0])
    }
  }
}
