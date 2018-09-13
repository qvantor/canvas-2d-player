import * as constants from './objects.constants'
import { store } from 'store'
import id from 'utils/id'

const { dispatch } = store

export const addObject = (obj) => dispatch({ type: constants.ADD_OBJ, payload: obj })

addObject({
  id: id(),
  type: 'rect',
  props: {
    top: 100,
    left: 500,
    width: 60,
    height: 70,
    fill: 'red'
  }
})

addObject({
  id: id(),
  type: 'rect',
  props: {
    top: 300,
    left: 200,
    width: 50,
    height: 50,
    fill: 'red'
  }
})

addObject({
  id: id(),
  type: 'img',
  props: {
    url: '/assets/img/2.jpg',
    scale: 0.3,
    left: 100,
    top: 100
  }
})

// setInterval(() => addObject({
//   id: id(),
//   type: 'img',
//   props: {
//     url: `/assets/img/${Math.random() > 0.5 ? 1 : 2}.jpg`,
//     scale: 0.3,
//     top: Math.random() * 600,
//     left: Math.random() * 1000
//   }
// }), 40)
