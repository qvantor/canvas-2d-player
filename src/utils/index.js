import * as types from 'types'

export { types }

export const id = type => {
  const id = '_' + Math.random().toString(36).substr(2, 9)
  return type ? `${type}${id}` : `${types.OBJECT}${id}`
}

export const typeById = id => {
  const type = id.split('_')[0]
  return types[type] || null
}

export const round = (num, div = 30) => Math.floor(num / div) * div
