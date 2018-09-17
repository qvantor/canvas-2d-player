import Immutable from 'seamless-immutable'

export default Immutable({
  list: [{
    name: 'Rect',
    type: 'rect',
    params: {
      width: 50,
      height: 50,
      fill: '#000000'
    }
  }, { name: 'Image', type: 'img' }, { name: 'Group', type: 'group' }]
})
