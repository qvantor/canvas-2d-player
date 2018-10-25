import { fabric } from 'fabric'
import canvasEvents from './core/events'
import Renderer from './core/Renderer'

import createInstance from './core/createInstance'
import components from './components'
import { getObjects, getFrame, getVisible } from 'sagas/selectors'
import { calcParams } from 'utils/'

import { store } from 'store'
import { renderer } from '../canvas-fabric/core/container'

export let canvas

const objWithParams = (objId, objects, frame) => {
  // @todo [OPTIMIZATION] object should be taken from object not array
  const object = objects.find(item => item.id === objId)
  const params = calcParams(object.keyframes, frame)
  if (Object.keys(object.keyframes).length === 0) return object
  return Object.assign({}, object, { params: Object.assign({}, object.params, params) })
}

class Canvas {
  constructor (params) {
    this.canvas = new fabric.Canvas(params.el, {
      preserveObjectStacking: true,
      renderOnAddRemove: false
    })

    canvasEvents(this.canvas)

    this.renderer = new Renderer(this.canvas)
    this.scene = {}

    this.renderCurrentFrame()
    components(this)
  }

  setSize ({ width, height }) {
    this.canvas.setWidth(width)
    this.canvas.setHeight(height)
    this.canvas.calcOffset()
  }

  addObj (obj) {
    const newObj = createInstance(obj.type, obj)
    this.scene[obj.id] = newObj
    this.canvas.add(newObj)
  }

  deleteObj (objId) {
    this.canvas.remove(this.scene[objId])
    delete this.scene[objId]
  }

  renderCurrentFrame () {
    const state = store.getState()
    const frame = getFrame(state)
    this._renderFrame(frame)
    this.renderer.render()
  }

  selectObject (id) {
    if (this.scene[id]) {
      this.canvas.setActiveObject(this.scene[id])
      this.renderer.render()
    }
  }

  setFrame (frame) {
    this._renderFrame(frame)
  }

  _renderFrame (frame) {
    const state = store.getState()
    const { cache } = getVisible(state)
    const visible = cache[frame]
    if (!visible) return

    const objects = getObjects(state)
    let allVisibleIds = visible.asMutable()
    for (let objId in this.scene) {
      const visibleIndex = allVisibleIds.indexOf(objId)
      if (visibleIndex === -1) {
        this.deleteObj(objId)
        continue
      }
      allVisibleIds.splice(visibleIndex, 1)
      this.scene[objId].update(objWithParams(objId, objects, frame))
    }
    for (let objId of allVisibleIds) {
      this.addObj(objWithParams(objId, objects, frame))
    }
  }
}

export const createCanvas = (params) => {
  canvas = new Canvas(params)
  return canvas
}
