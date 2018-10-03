export default (obj, props, oldProps) => {
  obj.maskParents.forEach(item => {
    if (item.addWithUpdate) item.addWithUpdate()
  })
}
