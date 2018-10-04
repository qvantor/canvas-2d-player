import { take } from 'redux-saga/effects'
import { renderer } from 'canvas-fabric/core/container'
import * as timelineConst from 'reducers/timeline/timeline.constants'

export default function * () {
  while (true) {
    yield take(timelineConst.TIMELINE_PLAY)
    renderer.play()
    yield take(timelineConst.TIMELINE_PAUSE)
    renderer.stop()
  }
}
