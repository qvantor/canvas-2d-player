import Immutable from 'seamless-immutable'

const basePart = {
  angle: 0,
  scaleX: 1,
  scaleY: 1,
  originX: 'center',
  originY: 'center',
  locked: false,
  selectable: true,
  evented: true,
  hasControls: true,
  hasBorders: true,
  hasRotatingPoint: true,
  lockMovementX: false,
  lockMovementY: false
}

export default Immutable({
  shadow: {},
  list: [
    {
      name: 'Group',
      type: 'group',
      visible: [[0, 5000]],
      params: {
        mask: false,
        selectable: true
      },
      keyframes: {},
      children: []
    },
    {
      name: 'Rect',
      type: 'rect',
      visible: [[0, 5000]],
      keyframes: {},
      params: Object.assign({
        width: 100,
        height: 100,
        fill: '#000000',
        left: 100,
        top: 100
      }, basePart)
    },
    {
      name: 'Text',
      type: 'textbox',
      visible: [[0, 5000]],
      keyframes: {},
      params: Object.assign({
        left: 100,
        top: 100,
        text: 'Text',
        fontFamily: 'Arial',
        width: 150,
        fontSize: 20,
        fontWeight: 400,
        fill: '#000000'
      }, basePart)
    },
    {
      name: 'Image',
      type: 'img',
      visible: [[0, 5000]],
      params: Object.assign({
        left: 100,
        top: 100
      }, basePart),
      keyframes: {}
    },
    {
      name: 'Path',
      type: 'path',
      visible: [[0, 5000]],
      params: Object.assign({
        points: [],
        func: 'curveBasisClosed'
      }, basePart),
      keyframes: {}
    }]
})
