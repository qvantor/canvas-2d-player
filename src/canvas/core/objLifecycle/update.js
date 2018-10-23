export default (instance, initProps) => {
  let prevProps
  return (newProps) => {
    const oldProps = prevProps || initProps
    if (instance.shouldObjUpdate(oldProps, newProps)) instance.forceUpdate(newProps, oldProps)
    prevProps = newProps
  }
}
