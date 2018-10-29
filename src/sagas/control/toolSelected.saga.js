import { take, select, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as constants from 'reducers/control/control.constants'
import { canvas } from 'canvas/container'
import splineBrush from 'canvas-fabric/brushes/spline'
import { addObject, removeObject } from 'reducers/objects/objects.actions'
import { findObj } from 'reducers/objects/objects.utils'
import { id, types } from 'utils/'

let brush

function * configureTool (tool) {
  if (tool === types.TOOL_BRUSH_CURVE) {
    const { lastSelected } = yield select(({ control }) => control)
    const objects = yield select(({ objects }) => objects)
    let params = null
    if (lastSelected) {
      const object = yield call(findObj, lastSelected[0], objects)
      if (object && object.type === 'path') {
        params = object.params
        removeObject(lastSelected[0])
      }
    }
    brush = splineBrush(canvas.canvas, params)
  } else if (brush && brush.type === types.TOOL_BRUSH_CURVE) {
    const { points, func, params } = brush.destroy()
    if (points.length <= 1) return
    const { list } = yield select(({ objTypes }) => objTypes)
    const cleanObj = list.find(item => item.type === 'path')
    const obj = cleanObj.merge({
      id: id(),
      params: Object.assign({ points, func }, params)
    }, { deep: true })
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
