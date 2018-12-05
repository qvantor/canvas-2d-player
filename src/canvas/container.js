import { fabric } from 'fabric'
import canvasEvents from './core/events'
import Renderer from './core/Renderer'
import HelperContainer from './HelperContainer'

import createInstance from './core/createInstance'
import components from './components'
import { getMask } from './core/masks'
import { getObjects, getVisible } from 'sagas/selectors'
import { objWithParams, types, typeById } from 'utils/'

import { store, frameStore } from 'store'

export let canvas

class Canvas extends HelperContainer {
  constructor (params) {
    super()
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
    super.setSize({ width, height })
    this.canvas.setWidth(width)
    this.canvas.setHeight(height)
    this.canvas.calcOffset()
  }

  addObj (obj) {
    const newObj = createInstance(obj.type, obj)
    this.scene[obj.id] = newObj
    this.canvas.add(newObj)
  }

  setOrder (cache) {
    for (let i = 0; i < cache.length; i++) {
      if (this.scene[cache[i]]) this.canvas.moveTo(this.scene[cache[i]], i)
    }
  }

  deleteObj (objId) {
    this.canvas.remove(this.scene[objId])
    delete this.scene[objId]
  }

  renderCurrentFrame () {
    const frame = frameStore.getState()
    this._renderFrame(frame)
    this.renderer.render()
  }

  selectObject (id) {
    const type = typeById(id)
    if (type === types.OBJECT && this.scene[id]) {
      this.canvas.setActiveObject(this.scene[id])
      this.renderer.render()
    } else if (type === types.MASK) {
      this.canvas.setActiveObject(getMask(id))
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
      this.setOrder(visible)
    }
  }
}

export const createCanvas = (params) => {
  canvas = new Canvas(params)
  return canvas
}
