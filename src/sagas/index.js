import { sagaMiddleware } from '../store'

import play from './play.saga'
sagaMiddleware.run(play)
