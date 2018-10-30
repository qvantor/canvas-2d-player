import * as objects from './objects/'

import objEvents from './objEvents/'
import objLifecycle from './objLifecycle/'

export default (type, props) => objEvents(objLifecycle(objects[type](props), props))
