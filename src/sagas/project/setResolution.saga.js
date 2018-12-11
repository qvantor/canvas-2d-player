import { take, select, call } from 'redux-saga/effects'
import * as constants from 'reducers/control/control.constants'
import { getControlSettings } from '../selectors'
import { projectParamsSet } from 'reducers/project/project.actions'
import { screenParams } from 'utils'

export default function * () {
  while (true) {
    const { payload } = yield take(constants.CONTROL_SETTINGS_SETTED)
    if (payload.aspect || payload.resolution || payload.orientation !== undefined) {
      const settings = yield select(getControlSettings)
      const res = [...screenParams.resolution.find(item => item.label === settings.resolution)[settings.aspect]]
      yield call(projectParamsSet, { resolution: settings.orientation ? res : res.reverse() })
    }
  }
}
