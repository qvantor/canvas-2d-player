import * as Masks from '../masks'

export default (instance) => (props, oldProps) => {
  if (props.params) {
    instance.set(props.params)
    if (props.params.mask !== oldProps.params.mask) {
      instance.clipPath = Masks.getMask(props.params.mask)
      instance.dirty = true
    }
    instance.setCoords()
  }
}
