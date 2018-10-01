import { fabric } from 'fabric'
import curves from 'canvas-fabric/utils/curves'

export default (canvas, params) => {
  const defaultValues = {
    selection: canvas.selection,
    defaultCursor: canvas.defaultCursor,
    hoverCursor: canvas.hoverCursor
  }
  canvas.selection = false
  canvas.defaultCursor = 'crosshair'
  canvas.hoverCursor = 'crosshair'

  let func = 'curveBasis'
  const d3line = curves(func, d => d.point.x, d => d.point.y)
  const margin = 3
  let points = []
  let oldLine = new fabric.Path()
  let ended = false
  let moving = false

  const documentKeydown = e => {
    switch (e.keyCode) {
      case 8:
      case 46:
        const selected = canvas.getActiveObjects()
        if (selected.length === 1) {
          selected[0].destroy()
        }
    }
  }
  document.addEventListener('keydown', documentKeydown)

  const canvasMouseDown = ({ target, absolutePointer }) => {
    if (ended) return
    if (canvas.getActiveObjects().length > 0) return canvas.discardActiveObject()
    if (target && target.type === 'spline-point') {
      if (target.first) {
        ended = true
        func = 'curveBasisClosed'
        renderPath()
      }
      return
    }
    const point = createPoint(absolutePointer)
    points.push(point)
    renderPath()
    moving = point
  }
  const canvasMouseMove = ({ absolutePointer }) => {
    if (moving) {
      moving.obj.top = absolutePointer.y
      moving.obj.left = absolutePointer.x
      moving.point.x = absolutePointer.x
      moving.point.y = absolutePointer.y
      renderPath()
    }
  }
  const canvasMouseUp = () => (moving = false)
  canvas.on('mouse:up', canvasMouseUp)
  canvas.on('mouse:move', canvasMouseMove)
  canvas.on('mouse:down:before', canvasMouseDown)

  const createPoint = (e) => {
    const obj = new fabric.Circle({
      top: e.y - margin,
      left: e.x - margin,
      strokeWidth: 2,
      radius: 4,
      fill: '#fff',
      stroke: '#666',
      type: 'spline-point',
      hasControls: false,
      first: points.length === 0
    })
    const point = { point: e, obj }

    obj.on('moving', e => {
      const { top, left } = e.target
      point.point = { x: left, y: top }
      renderPath()
    })
    obj.hoverCursor = points.length === 0 ? 'cell' : 'move'
    obj.destroy = () => {
      points = points.filter(item => item !== point)
      canvas.remove(obj)
      renderPath()
    }
    canvas.add(point.obj)
    return point
  }

  const renderPath = () => {
    if (points.length > 1) {
      const lineParams = {
        fill: 'rgba(0,0,0,0.1)',
        stroke: 'red',
        strokeWidth: 1,
        evented: false,
        hasBorders: false,
        hasControls: false,
        hoverCursor: 'cell',
        type: 'spline-line'
      }
      let fullParams
      if (params) {
        fullParams = Object.assign(lineParams, {
          fill: params.fill
        })
      }
      const line = new fabric.Path(d3line(points, func), fullParams || lineParams)
      if (oldLine) canvas.remove(oldLine)
      canvas.add(line)
      canvas.sendBackwards(line)
      oldLine = line
    } else if (oldLine) canvas.remove(oldLine)
  }

  if (params) {
    ended = true
    func = params.func
    params.points.forEach(item => points.push(createPoint(item)))
    renderPath()
  }

  return {
    type: 'spline',
    destroy: () => {
      canvas.selection = defaultValues.selection
      canvas.defaultCursor = defaultValues.defaultCursor
      canvas.hoverCursor = defaultValues.hoverCursor
      document.removeEventListener('keydown', documentKeydown)
      canvas.off('mouse:up', canvasMouseUp)
      canvas.off('mouse:move', canvasMouseMove)
      canvas.off('mouse:down:before', canvasMouseDown)
      return {
        params: {
          top: oldLine.top,
          left: oldLine.left,
          fill: oldLine.fill
        },
        points: points.map(point => {
          point.obj.destroy()
          return point.point
        }),
        func
      }
    }
  }
}
