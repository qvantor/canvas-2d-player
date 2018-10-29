import * as types from 'types'
import calcParams from './calcParams'
import connect from './connect'

export { types, calcParams, connect }

export const id = type => {
  const id = '_' + Math.random().toString(36).substr(2, 9)
  return type ? `${type}${id}` : `${types.OBJECT}${id}`
}

export const typeById = id => {
  const type = id.split('_')[0]
  return types[type] || null
}

export const round = (num, div = 30) => Math.floor(num / div) * div

export const extractParams = target => ({
  angle: target.angle,
  left: target.left,
  top: target.top,
  scaleX: target.scaleX,
  scaleY: target.scaleY,
  flipX: target.flipX,
  flipY: target.flipY,
  originX: target.originX,
  originY: target.originY,
  width: target.width,
  height: target.height
})
