export const findObj = (id, list) => {
  for (let item of list) {
    if (item.id === id) {
      return item
    } else if (item.children) {
      const obj = findObj(id, item.children)
      if (obj) return obj
    }
  }
}
