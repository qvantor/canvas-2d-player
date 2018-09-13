import * as objects from './objects/'

export default (type, props) => {
  return objects[type](props)
}
