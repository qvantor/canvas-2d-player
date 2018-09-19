import MainLoop from 'mainloop.js'
import { take } from 'redux-saga/effects'
import { store } from 'store/'

import * as timelineConst from 'reducers/timeline/timeline.constants'
import { setTime } from 'reducers/timeline/timeline.actions'

const { getState } = store

MainLoop.setMaxAllowedFPS(25)

const loop = MainLoop
  .setUpdate(e => {
    const { timeline: { time, duration } } = getState()
    if (time >= duration) {
      setTime(0)
    } else {
      setTime(Math.ceil(time + e))
    }
  })

export default function * () {
  while (true) {
    yield take(timelineConst.TIMELINE_PLAY)
    const a = 30
    const loop = setInterval(e => {
      const { timeline: { time, duration } } = getState()
      if (time >= duration) {
        setTime(0)
      } else {
        setTime(time + a)
      }
    }, a)
    yield take(timelineConst.TIMELINE_PAUSE)
    clearInterval(loop)
  }
}
