import update from './update'
import forceUpdate from './forceUpdate'
import shouldObjUpdate from './shouldObjUpdate'
import * as Masks from 'canvas/core/masks'

export default (instance, props) => {
  // objCreate
  instance.id = props.id
  instance.type = props.type
  if (props.params) {
    instance.set(props.params)
    if (props.params.mask) instance.clipPath = Masks.getMask(props.params.mask)
  }

  instance.shouldObjUpdate = shouldObjUpdate(instance)
  instance.forceUpdate = forceUpdate(instance)
  instance.update = update(instance, props)

  return instance
}
