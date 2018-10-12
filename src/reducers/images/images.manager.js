import { renderer } from 'canvas-fabric/core/container'

const cache = {}
const listners = {}

const updateImgObj = (obj, image) => {
  obj.setElement(image)
  obj.dirty = true
  obj.setCoords()
  if (obj.group) obj.group.dirty = true
  renderer.render()
}

export const addImage = img => new Promise((resolve, reject) => {
  const image = new Image()
  image.src = img.url
  image.onload = () => {
    cache[img.id] = image
    if (listners[img.id]) {
      listners[img.id] = listners[img.id].filter(obj => {
        updateImgObj(obj, image)
        return false
      })
    }
    resolve(image)
  }
  image.onerror = (e) => reject(e)
})

export const getImage = id => cache[id]

export const addListener = (imgId, obj) => {
  if (cache[imgId]) return updateImgObj(obj, cache[imgId])
  listners[imgId] ? listners[imgId].push(obj) : listners[imgId] = [obj]
}