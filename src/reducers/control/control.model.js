import Immutable from 'seamless-immutable'

import { types } from 'utils/'

export default Immutable({
  selection: null,
  lastSelected: null,
  textEditing: false,
  tool: types.TOOL_SELECTION_MOVE,
  openFrames: [],
  openObjects: [],
  colors: ['#ffffff', '#000000'],
  drag: {
    dragging: false,
    type: null,
    target: null,
    data: null
  }
})
