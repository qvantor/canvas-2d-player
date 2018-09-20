import { sagaMiddleware } from '../store'

import play from './play.saga'
import setVisibleFrame from './objects/setVisibleFrame'

sagaMiddleware.run(play)
sagaMiddleware.run(setVisibleFrame)
