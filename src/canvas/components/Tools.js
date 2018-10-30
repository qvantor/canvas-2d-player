import { connect } from 'utils/'
import { types } from 'utils/'

import CurveBrush from './Brushes/Curve.brush'

const tools = {
  [types.TOOL_BRUSH_CURVE]: CurveBrush
}

export default (canvas) => {
  let currentTool = null
  const onUpdate = (props) => {
    if (currentTool) currentTool.destroy()
    currentTool = tools[props] ? tools[props](canvas) : null
  }

  const mapStateToProps = state => state.control.tool
  connect(mapStateToProps, onUpdate)
}
