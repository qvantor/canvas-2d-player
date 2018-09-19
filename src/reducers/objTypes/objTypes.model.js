import Immutable from 'seamless-immutable'

export default Immutable({
  list: [
    {
      name: 'Group',
      type: 'group',
      params: {},
      keyframes: {},
      children: []
    },
    {
      name: 'Rect',
      type: 'rect',
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
      keyframes: {
        scaleX: {
          keys: [[0, 1], [700, 1.5], [1500, 0.5], [2000, 1]],
          from: 0,
          to: 2000
        },
        scaleY: {
          keys: [[0, 1], [900, 1.5], [1800, 0.5], [2000, 1]],
          from: 0,
          to: 2000
        },
        angle: {
          keys: [[0, 90], [900, 60], [1800, 180], [2000, 90]],
          from: 0,
          to: 2000
        }
      }
    }]
})
