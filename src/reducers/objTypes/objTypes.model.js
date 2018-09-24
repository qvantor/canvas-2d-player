import Immutable from 'seamless-immutable'

export default Immutable({
  shadow: {

  },
  list: [
    {
      name: 'Group',
      type: 'group',
      visible: [[0, 5000]],
      params: {},
      keyframes: {},
      children: []
    },
    {
      name: 'Rect',
      type: 'rect',
      visible: [[0, 5000]],
      keyframes: {},
      params: {
        width: 50,
        height: 50,
        fill: '#000000',
        left: 100,
        top: 100,
        scaleX: 1,
        scaleY: 1,
        originX: 'center',
        originY: 'center',
        shadow: false
      }
    },
    {
      name: 'Text',
      type: 'textbox',
      visible: [[0, 5000]],
      keyframes: {},
      params: {
        left: 100,
        top: 100,
        text: 'Text',
        fontFamily: 'Arial',
        width: 150,
        fontSize: 20,
        fontWeight: 400,
        fill: '#000000',
        shadow: false
      }
    },
    {
      name: 'Image',
      type: 'img',
      visible: [[0, 5000]],
      params: {
        left: 100,
        top: 100,
        originX: 'center',
        originY: 'center',
        shadow: false
      },
      keyframes: {}
    }]
})
