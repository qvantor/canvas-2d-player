import Immutable from 'seamless-immutable'

export default Immutable({
  list: [
    {
      name: 'Group',
      type: 'group',
      visible: [[0, 1000], [1500, 2000]],
      params: {},
      keyframes: {},
      children: []
    },
    {
      name: 'Rect',
      type: 'rect',
      visible: [[0, 5000]],
      keyframes: {
        width: {
          keys: [[0, 50], [1000, 100], [2000, 50]],
          from: 0,
          to: 2000
        }
      },
      params: {
        width: 50,
        height: 50,
        fill: '#000000',
        left: 100,
        top: 100,
        scaleX: 1,
        scaleY: 1
      }
    },
    {
      name: 'Text',
      type: 'textbox',
      visible: [[0, 1000], [1500, 2000]],
      keyframes: {},
      params: {
        text: 'Text',
        fontFamily: 'Arial',
        width: 150,
        fontSize: 20,
        fontWeight: 400,
        fill: '#000000'
      }
    },
    {
      name: 'Image',
      type: 'img',
      visible: [[0, 5000]],
      params: {
        left: 100,
        top: 100
      },
      keyframes: {}
    }]
})
