export default (obj, props, oldProps) => {
  obj.absolutePositioned = props.absolutePositioned
  obj.inverted = props.inverted
  obj.maskParents.forEach(item => (item.dirty = true))
}
