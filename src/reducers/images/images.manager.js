import { canvas } from 'canvas/container'

const cache = {}
const listners = {}

const updateImgObj = (obj, image) => {
  obj.setElement(image)
  obj.dirty = true
  obj.setCoords()
  if (obj.group) obj.group.dirty = true
  canvas.renderer.render()
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
  image.onerror = (e) => console.log('Image is not available', img.url)
})

export const getImage = id => cache[id]

export const addListener = (imgId, obj) => {
  if (cache[imgId]) return updateImgObj(obj, cache[imgId])
  listners[imgId] ? listners[imgId].push(obj) : listners[imgId] = [obj]
}
