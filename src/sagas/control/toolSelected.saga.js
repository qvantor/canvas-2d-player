import { take, select, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as constants from 'reducers/control/control.constants'
import { canvas } from 'canvas-fabric/core/container'
import splineBrush from 'canvas-fabric/brushes/spline'
import { addObject } from 'reducers/objects/objects.actions'
import idGen from 'utils/id'

let brush

function * configureTool (tool) {
  if (tool === 'spline') {
    brush = splineBrush(canvas)
  } else if (brush && brush.type === 'spline') {
    const { points, func } = brush.destroy()
    const { list } = yield select(({ objTypes }) => objTypes)
    const cleanObj = list.find(item => item.type === 'path')
    const obj = cleanObj.merge({ id: idGen(), params: { points, func } }, { deep: true })
    yield call(addObject, obj)
  }
}

export default function * () {
  const { tool } = yield select(({ control }) => control)
  yield delay(1000)
  yield configureTool(tool)
  while (true) {
    const { payload } = yield take(constants.CONTROL_SET_TOOL)
    yield configureTool(payload)
  }
}
