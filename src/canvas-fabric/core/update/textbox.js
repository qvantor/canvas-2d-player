export default (obj, props, oldProps) => {
  if (oldProps.fontFamily !== props.fontFamily) obj.set('fontFamily', props.fontFamily)
  if (oldProps.fontSize !== props.fontSize) obj.set('fontSize', props.fontSize)
  if (oldProps.fill !== props.fill) obj.set('fill', props.fill)
  if (oldProps.fontWeight !== props.fontWeight) obj.set('fontWeight', props.fontWeight)
}
