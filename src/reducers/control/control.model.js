import Immutable from 'seamless-immutable'

export default Immutable({
  selection: null,
  lastSelected: null,
  textEditing: false,
  tool: 'standard',
  openFrames: [],
  openObjects: [],
  colors: ['#ffffff', '#000000']
})
