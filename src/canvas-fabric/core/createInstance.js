import * as objects from './objects/'

import coreEvents from './events/coreEvents'
import update from './update'

export default (type, props) => coreEvents(update(objects[type](props), props))
