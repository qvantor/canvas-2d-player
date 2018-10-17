import * as objConstants from 'reducers/objects/objects.constants'
import * as imgConstants from 'reducers/images/images.constants'

export const BEFORE = `BEFORE_`

const beforeActions = [objConstants.REMOVE_OBJ, imgConstants.IMAGE_REMOVE]

export default () => next => action => {
  if (beforeActions.indexOf(action.type) !== -1) {
    const beforeAction = {
      ...action,
      type: `${BEFORE}${action.type}`
    }
    next(beforeAction)
  }
  return next(action)
}
