import Immutable from 'seamless-immutable'

import { types } from 'utils'

const basePart = {
  opacity: 1,
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
      params: Object.assign({
        left: 100,
        top: 100
      }, basePart),
      keyframes: {}
    },
    {
      name: 'Path',
      type: types.OBJ_TYPE_PATH,
      params: Object.assign(basePart, {
        points: [],
        func: 'curveBasisClosed',
        originX: 'left',
        originY: 'top'
      }),
      keyframes: {}
    }]
})
