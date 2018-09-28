import { line, curveBasis, curveBasisClosed } from 'd3'

const curves = {
  curveBasis,
  curveBasisClosed
}

export default (curve = 'curveBasisClosed', x = d => d.x, y = d => d.y) => {
  const d3line = line()
    .x(x)
    .y(y)
    .curve(curves[curve])

  return (points, curve) => {
    if (curve) d3line.curve(curves[curve])
    return d3line(points)
  }
}
