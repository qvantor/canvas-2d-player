import { addMaskToObj } from 'reducers/masks/masks.actions'
import { typeById, types } from '../../../../utils/'

import * as dndBacklight from './dndBacklight'

export const drop = (obj, e, data) => {
  if (typeById(obj.id) === types.MASK) return
  dndBacklight.hide(e)

  if (data.maskId) addMaskToObj(obj.id, data.maskId)
}

export const dragenter = (obj, e) => {
  if (typeById(obj.id) === types.MASK) return
  dndBacklight.show(e)
}

export const dragleave = (obj, e) => {
  if (typeById(obj.id) === types.MASK) return
  dndBacklight.hide(e)
}
