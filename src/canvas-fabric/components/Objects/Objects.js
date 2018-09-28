import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'reducers/objects/objects.actions'
import { calcParams } from './animate'

class Objects extends Component {
  checkVisible = (keys, time) => {
    for (let key of keys) {
      if (key[0] <= time && key[1] >= time) {
        return true
      }
    }
    return false
  }

  renderObj = (objs) =>
    objs.map(item => {
      if (!this.checkVisible(item.visible, this.props.time)) return
      let newParams
      if (Object.keys(item.keyframes).length > 0) {
        const keyParams = calcParams(item.keyframes, this.props.time)
        if (Object.keys(item.keyframes).length > 0) {
          newParams = Object.assign({}, item.params, keyParams)
        }
      }
      return <item.type
        key={item.id}
        id={item.id}
        url={item.url}
        params={newParams || item.params}>
        {item.children && this.renderObj(item.children)}
      </item.type>
    })

  render () {
    const { objects, tool } = this.props
    const tree = tool !== 'spline'
      ? this.renderObj(objects)
      : <group params={{ selectable: false }}>{this.renderObj(objects)}</group>
    return (
      <collection>
        {tree}
      </collection>
    )
  }
}

const mapStateToProps = state => ({
  objects: state.objects,
  time: state.timeline.time,
  tool: state.control.tool
})
export default connect(mapStateToProps)(Objects)
