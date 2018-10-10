export default (obj, props, oldProps) => {
  if (oldProps.fill !== props.fill) obj.setColor(props.fill)
  if (oldProps.width !== props.width) {
    obj.set('width', props.width)
    obj.dirty = true
  }
  if (oldProps.height !== props.height) {
    obj.set('width', props.width)
    obj.dirty = true
  }
}
