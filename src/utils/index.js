import * as types from 'types'
import * as menuViews from 'menuViews'
import * as screenParams from 'screenParams'
import calcParams from './calcParams'
import connect from './connect'
import curves from './curves'

import { findObj } from 'reducers/objects/objects.utils'

export { types, calcParams, connect, curves, menuViews, screenParams }

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

export const objWithParams = (object, frame) => {
  const params = calcParams(object.keyframes, frame)
  if (Object.keys(object.keyframes).length === 0) return object
  return Object.assign({}, object, { params: Object.assign({}, object.params, params) })
}

export const setAlpha = (color, alpha = 0.5) => color.replace(/(\d\.|)\d+\)/, `${alpha})`)
