import { fabric } from 'fabric'
import { line, curveBasis } from 'd3'

export default (canvas) => {
  const brush = new fabric.BaseBrush()
  let d3line = line()
    .x(d => d.point.x)
    .y(d => d.point.y)
    .curve(curveBasis)

  const createPoint = e => {
    const obj = new fabric.Circle({
      top: e.y - 2,
      left: e.x - 2,
      strokeWidth: 1,
      radius: 3,
      fill: '#fff',
      stroke: '#666'
    })
    const point = {
      point: e,
      obj
    }
    canvas.add(point.obj)
    return point
  }

  const points = []
  let oldLine

  brush.onMouseDown = e => {
    points.push(createPoint(e))

    if (points.length > 1) {
      const line = new fabric.Path(d3line(points), {
        fill: 'rgba(0,0,0,.1)',
        stroke: 'red',
        strokeWidth: 1
      })

      if (oldLine) canvas.remove(oldLine)
      canvas.add(line)
      oldLine = line
    }
  }
  brush.onMouseUp = e => {}
  // console.log('onMouseUp', e)
  brush.onMouseMove = e => {}
  // console.log('onMouseMove', e)
  brush._render = e => {}
  // console.log('_render', e)
  return brush
}
