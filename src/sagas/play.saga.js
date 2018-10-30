import { take } from 'redux-saga/effects'
import { canvas } from 'canvas/container'
import * as timelineConst from 'reducers/timeline/timeline.constants'

export default function * () {
  while (true) {
    yield take(timelineConst.TIMELINE_PLAY)
    canvas.renderer.play()
    yield take(timelineConst.TIMELINE_PAUSE)
    canvas.renderer.stop()
  }
}
