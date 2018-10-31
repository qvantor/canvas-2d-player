import { fabric } from 'fabric'
import { extractParams, curves, setAlpha } from 'utils/'
import { store } from 'store'
import { getColors } from 'sagas/selectors'

import { addObject } from 'reducers/objects/objects.actions'
import { createPathByPoints } from 'reducers/objects/objects.utils'

class CurveBrush {
  constructor (params) {
    this.ended = params.points.length !== 0
    this.points = params.points
    this.canvas = params.canvas
    this.curve = curves(params.curve, d => d.point.x, d => d.point.y)
    this.func = params.curve
    this.firstColor = params.colors[0]
    this.moving = false

    this.canvas.defaultCursor = 'crosshair'
    this.canvas.hoverCursor = 'crosshair'

    this.canvas.on('mouse:down:before', this.onMouseDown)
    this.canvas.on('mouse:up', this.onMouseUp)
    this.canvas.on('mouse:move', this.onMouseMove)
    document.addEventListener('keydown', this.onKeydown)
  }

  createPoint = (e) => {
    const obj = new fabric.Circle({
      top: e.y,
      left: e.x,
      strokeWidth: 2,
      radius: 4,
      fill: '#fff',
      stroke: '#666',
      type: 'spline-point',
      hasControls: false,
      originX: 'center',
      originY: 'center',
      first: this.points.length === 0
    })

    obj.on('moving', e => {
      const { top, left } = e.target
      point.point = { x: left, y: top }
      this.calcPath()
    })
    obj.hoverCursor = this.points.length === 0 ? 'cell' : 'move'
    obj.destroy = () => {
      this.points = this.points.filter(item => item !== point)
      this.canvas.remove(obj)
      this.calcPath()
    }

    const point = { point: e, obj }
    this.canvas.add(point.obj)
    return point
  }

  calcPath = () => {
    if (this.points.length > 2) {
      if (this.oldLine) this.canvas.remove(this.oldLine)
      const lineParams = {
        fill: setAlpha(this.firstColor),
        stroke: 'red',
        strokeWidth: 1,
        evented: false,
        selection: false,
        hoverCursor: 'cell',
        type: 'spline-line'
      }
      const line = new fabric.Path(this.curve(this.points, this.func), lineParams)
      this.canvas.add(line)
      this.canvas.sendBackwards(line)
      this.oldLine = line
    }
  }

  onMouseDown = ({ absolutePointer, target }) => {
    if (this.ended) return
    if (this.canvas.getActiveObjects().length > 0) return this.canvas.discardActiveObject()
    if (target && target.type === 'spline-point') {
      if (target.first) {
        this.ended = true
        this.func = 'curveBasisClosed'
        this.calcPath()
      }
      return
    }
    this.moving = this.createPoint(absolutePointer)
    this.points.push(this.moving)
    this.calcPath()
  }
  onKeydown = e => {
    switch (e.keyCode) {
      case 8:
      case 46:
        const selected = this.canvas.getActiveObjects()
        if (selected.length === 1) {
          selected[0].destroy()
        }
    }
  }
  onMouseUp = () => (this.moving = false)
  onMouseMove = ({ absolutePointer }) => {
    if (this.moving) {
      this.moving.obj.top = absolutePointer.y
      this.moving.obj.left = absolutePointer.x
      this.moving.point.x = absolutePointer.x
      this.moving.point.y = absolutePointer.y
      this.calcPath()
    }
  }
  destroy = () => {
    this.canvas.off('mouse:down:before', this.onMouseDown)
    this.canvas.off('mouse:up', this.onMouseUp)
    this.canvas.off('mouse:move', this.onMouseMove)
    document.removeEventListener('keydown', this.onKeydown)
    if (this.oldLine) this.canvas.remove(this.oldLine)

    const params = this.oldLine
      ? Object.assign(extractParams(this.oldLine), { fill: this.oldLine })
      : null
    return {
      params: params,
      points: this.points.map(item => {
        this.canvas.remove(item.obj)
        return item.point
      }),
      func: this.func
    }
  }
}

export default (canvas) => {
  const points = []
  const curve = 'curveBasis'
  const colors = getColors(store.getState())
  const brush = new CurveBrush({ points, curve, canvas: canvas.helpCanvas, colors })
  canvas.helperToFront()

  return {
    destroy: () => {
      canvas.helperToBack()
      const obj = brush.destroy()
      if (obj.params) addObject(createPathByPoints(obj))
    }
  }
}
