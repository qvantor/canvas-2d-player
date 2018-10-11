export default (obj, props, oldProps) => {
  if (oldProps.fill !== props.fill) obj.setColor(props.fill)
}
