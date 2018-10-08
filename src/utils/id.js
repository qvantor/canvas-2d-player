export default (type) => {
  const id = '_' + Math.random().toString(36).substr(2, 9)
  return type ? `${type}${id}` : `object${id}`
}
