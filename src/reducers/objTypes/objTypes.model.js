import Immutable from 'seamless-immutable'

export default Immutable({
  shadow: {},
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
        width: 100,
        height: 100,
        fill: '#000000',
        left: 100,
        top: 100,
        scaleX: 1,
        scaleY: 1,
        originX: 'center',
        originY: 'center',
        selectable: true
      },
      shadow: {}
    },
    {
      name: 'Text',
      type: 'textbox',
      visible: [[0, 5000]],
      keyframes: {},
      params: {
        left: 100,
        top: 100,
        scaleX: 1,
        scaleY: 1,
        text: 'Text',
        fontFamily: 'Arial',
        width: 150,
        fontSize: 20,
        fontWeight: 400,
        fill: '#000000',
        selectable: true
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
        selectable: true
      },
      keyframes: {}
    },
    {
      name: 'Path',
      type: 'path',
      visible: [[0, 5000]],
      params: {
        left: 100,
        top: 100,
        originX: 'center',
        originY: 'center',
        selectable: true,
        points: [
          { x: 0, y: 1 },
          { x: 10, y: 100 },
          { x: 20, y: 300 }
        ],
        func: 'curveBasisClosed'
      },
      keyframes: {}
    }]
})
