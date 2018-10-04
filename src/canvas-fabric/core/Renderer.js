import { fabric } from 'fabric'
import Stats from 'stats.js'
import { store } from 'store'
import { setTime } from 'reducers/timeline/timeline.actions'

const { getState } = store

export default class Renderer {
  constructor (canvas) {
    this.canvas = canvas
    this.stats = new Stats()
    this.playing = false
    this.animationTime = 0

    document.body.appendChild(this.stats.dom)
    this._render()
  }

  play () {
    this.playing = true
    this._render()
  }

  stop () {
    this.playing = false
    this.animationTime = false
  }

  render () {
    if (!this.playing) this._render()
  }

  _render = (e) => {
    this.stats.begin()
    if (this.playing) this._playingRender(e)
    else this._stoppedRender()
    this.stats.end()
  }
  _playingRender = (e) => {
    fabric.util.requestAnimFrame(this._render)
    let deltaTime = 20
    if (this.animationTime) deltaTime = e - this.animationTime
    this.animationTime = e
    const { timeline: { time, duration } } = getState()
    if (time + deltaTime >= duration) {
      setTime(0)
    } else {
      setTime(time + deltaTime)
    }
    this.canvas.renderAll()
  }

  _stoppedRender = () => {
    this.canvas.requestRenderAll()
  }
}
