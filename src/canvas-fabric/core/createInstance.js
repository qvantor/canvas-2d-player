import * as objects from './objects/'

import objEvents from './objEvents/'
import update from './update'

export default (type, props) => objEvents(update(objects[type](props), props))
