import update from './update'
import forceUpdate from './forceUpdate'
import shouldObjUpdate from './shouldObjUpdate'
import * as Masks from 'canvas-fabric/core/Masks'

export default (instance, props) => {
  // objCreate
  instance.set(props.params)
  instance.id = props.id
  instance.type = props.type
  // if (props.params && props.params.mask) instance.clipPath = Masks.getMask(props.params.mask, instance)

  instance.shouldObjUpdate = shouldObjUpdate(instance)
  instance.forceUpdate = forceUpdate(instance)
  instance.update = update(instance, props)

  return instance
}
