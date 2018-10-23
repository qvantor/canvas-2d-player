export default (obj) => (newProps) => {
  obj.set(newProps.params)
  obj.setCoords()
}
