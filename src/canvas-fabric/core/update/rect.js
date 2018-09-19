export default (obj, props, oldProps) => {
  if (oldProps.fill !== props.fill) obj.setColor(props.fill)
  if (oldProps.width !== props.width) obj.set('width', props.width)
  if (oldProps.height !== props.height) obj.set('height', props.height)
}
