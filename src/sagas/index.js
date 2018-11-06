import { sagaMiddleware } from '../store'
import { all, fork } from 'redux-saga/effects'

import play from './play.saga'
import canvasRedux from './canvasRedux.saga'

import visibleSet from './visible/visibleSet.saga'

import setVisibleFrame from './objects/setVisibleFrame.saga'
import setKeyframe from './objects/setKeyframe.saga'
import { prevKeyframe, nextKeyframe } from './objects/toKeyFrame.saga'
import initialKeyFrame from './objects/initialKeyFrame.saga'
import objClone from './objects/objClone.saga'

import cloneAsMask from './masks/cloneAsMask.saga'
import maskAttached from './masks/maskAttached.saga'
import removeMask from './masks/removeMask.saga'

import selectSync from './control/selectSync.saga'

import imageAdd from './images/imageAdd.saga'
import removeImgObject from './images/removeImgObject.saga'
import cloneImage from './images/cloneImage.saga'
import removeImage from './images/removeImage.saga'

import objOrderSet from './objOrder/objOrderSet.saga'

function * rootSaga () {
  yield all([
    fork(play),
    fork(canvasRedux),

    fork(visibleSet),

    fork(setVisibleFrame),
    fork(setKeyframe),
    fork(prevKeyframe),
    fork(nextKeyframe),
    fork(initialKeyFrame),
    fork(objClone),

    fork(maskAttached),
    fork(cloneAsMask),
    fork(removeMask),

    fork(selectSync),

    fork(imageAdd),
    fork(cloneImage),
    fork(removeImgObject),
    fork(removeImage),

    fork(objOrderSet)
  ])
}

sagaMiddleware.run(rootSaga)
