import { fabric } from 'fabric'
import Stats from 'stats.js'
import { frameStore, store } from 'store'
import { canvas } from '../container'

export default class Renderer {
  constructor (canvas) {
    this.canvas = canvas
    this.stats = new Stats()
    this.playing = false
    this.animationTime = 0
    this.frameTime = 16.6666666667

    this.stats.dom.style.left = '50px'
    this.stats.dom.style.top = '20px'
    this.stats.dom.style['z-index'] = 10
    document.body.appendChild(this.stats.dom)

    this._render()
  }

  play () {
    const { timeline: { frames } } = store.getState()
    this.framesCount = frames
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

    const frameOffset = Math.round(deltaTime / this.frameTime)
    const frame = frameStore.getState()
    let frameNumber = frame + frameOffset
    frameNumber = frameNumber >= this.framesCount ? 0 : frameNumber
    frameStore.setPlayFrame(frameNumber)
    canvas.setFrame(frameNumber)
    this.canvas.renderAll()
  }

  _stoppedRender = () => {
    this.canvas.requestRenderAll()
  }
}
