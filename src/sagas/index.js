import { sagaMiddleware } from '../store'

import play from './play.saga'
import setVisibleFrame from './objects/setVisibleFrame.saga'
import setKeyframe from './objects/setKeyframe.saga'

sagaMiddleware.run(play)
sagaMiddleware.run(setVisibleFrame)
sagaMiddleware.run(setKeyframe)
