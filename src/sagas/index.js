import { sagaMiddleware } from '../store'

import play from './play.saga'
import setVisibleFrame from './objects/setVisibleFrame.saga'
import setKeyframe from './objects/setKeyframe.saga'
import { prevKeyframe, nextKeyframe } from './objects/toKeyFrame.saga'
import initialKeyFrame from './objects/initialKeyFrame.saga'
import { moveToRoot } from './objects/movedObj.saga'

sagaMiddleware.run(play)
sagaMiddleware.run(setVisibleFrame)
sagaMiddleware.run(setKeyframe)
sagaMiddleware.run(prevKeyframe)
sagaMiddleware.run(nextKeyframe)
sagaMiddleware.run(initialKeyFrame)
sagaMiddleware.run(moveToRoot)
