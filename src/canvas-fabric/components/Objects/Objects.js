import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'reducers/objects/objects.actions'
import { calcParams } from './animate'

class Objects extends Component {
  renderObj = (objs) =>
    objs.map(item => {
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
        params={newParams || item.params}>{item.children && this.renderObj(item.children)}</item.type>
    })

  render () {
    const { visible } = this.props

    return (
      <collection>{this.renderObj(visible)}</collection>
    )
  }
}

const mapStateToProps = state => ({
  visible: state.objects.visible,
  time: state.timeline.time
})
export default connect(mapStateToProps)(Objects)
