import * as constants from 'reducers/objects/objects.constants'

export const BEFORE = `BEFORE_`

const beforeActions = [constants.REMOVE_OBJ]

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
