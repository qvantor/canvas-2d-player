import { fabric } from 'fabric'
import canvasEvents from './core/events'
import Renderer from './core/Renderer'

import createInstance from './core/createInstance'
import { getObjects, getFrame, getVisible } from 'sagas/selectors'
import { calcParams } from 'utils/'

import { store } from 'store'

export let canvas

const checkVisible = (keys, frame) => {
  for (let key of keys) {
    if (key[0] <= frame && key[1] >= frame) {
      return true
    }
  }
  return false
}

class Canvas {
  constructor (params) {
    this.canvas = new fabric.Canvas(params.el)

    this.canvas.preserveObjectStacking = true

    canvasEvents(this.canvas)

    this.renderer = new Renderer(this.canvas)
    this.scene = {}
  }

  setSize ({ width, height }) {
    this.canvas.setWidth(width)
    this.canvas.setHeight(height)
    this.canvas.calcOffset()
  }

  addObj (obj, params) {
    const newObj = createInstance(obj.type, obj)
    newObj.set(params)
    this.scene[obj.id] = newObj
    this.canvas.add(newObj)
  }

  deleteObj (objId) {
    this.canvas.remove(this.scene[objId])
  }

  setInitialFrame () {
    this.canvas.clear()
    const state = store.getState()
    const frame = getFrame(state)
    const objects = getObjects(state)
    const { cache } = getVisible(state)
    const visible = cache[frame]
    if (!visible) return

    for (let objId of visible) {
      // @todo [OPTIMIZATION] object should be taken from object not array
      const object = objects.find(item => item.id === objId)
      const params = calcParams(object.keyframes, frame)
      this.addObj(object, Object.assign({}, object.params, params))
    }
  }

  setFrame (frame) {
    const state = store.getState()
    const { cache } = getVisible(state)
    const visible = cache[frame]
    if (!visible) return

    const allVisibleIds = cache[frame].asMutable()

    for (let key in this.scene) {
      const obj = this.scene[key]
      const objVisibleIndex = allVisibleIds[key]
      if (objVisibleIndex !== -1) delete allVisibleIds[obj.id]
      else {
        this.deleteObj(obj.id)
        delete allVisibleIds[obj.id]
        continue
      }
      const params = calcParams(obj.keyframes, frame)
      if (Object.keys(params).length > 0) obj.set(Object.assign({}, obj.params, params))
    }
    // allVisibleIds and this.scene
    // for(let obj in this.scene){
    // if(allVisibleIds[obj.id]) delete allVisibleIds[obj.id]
    // else {
    //  this.deleteObj(obj.id)
    //  delete allVisibleIds[obj.id]
    // }
    // const params = calcParams(object.keyframes, frame)
    // if(params) obj.set(Object.assign({}, object.params, params))
    // }
    // const objects = getObjects(state)
    // for(let objId in allVisibleIds){
    // addObj(objects[objId])
    // }
  }
}

export const createCanvas = (params) => {
  canvas = new Canvas(params)
  return canvas
}
