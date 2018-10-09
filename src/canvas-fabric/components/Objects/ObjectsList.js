import React from 'react'
import { calcParams } from './animate'
import { connect } from 'react-redux'

const ObjectsList = (props) => {
  const checkVisible = (keys, time) => {
    for (let key of keys) {
      if (key[0] <= time && key[1] >= time) {
        return true
      }
    }
    return false
  }
  const renderObj = (objs) =>
    objs.map(item => {
      if (!checkVisible(item.visible, props.time)) return
      let newParams
      if (Object.keys(item.keyframes).length > 0) {
        const keyParams = calcParams(item.keyframes, props.time)
        if (Object.keys(item.keyframes).length > 0) {
          newParams = Object.assign({}, item.params, keyParams)
        }
      }
      return <item.type
        key={item.id}
        id={item.id}
        url={item.url}
        params={newParams || item.params}>
        {item.children && renderObj(item.children)}
      </item.type>
    })
  return renderObj(props.objects)
}

const mapStateToProps = state => ({
  time: state.timeline.time
})
export default connect(mapStateToProps)(ObjectsList)
