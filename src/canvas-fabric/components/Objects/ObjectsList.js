import React from 'react'
import { calcParams } from './animate'
import { connect } from 'react-redux'

const ObjectsList = (props) => {
  const checkVisible = (keys, frame) => {
    for (let key of keys) {
      if (key[0] <= frame && key[1] >= frame) {
        return true
      }
    }
    return false
  }
  const renderObj = (objs) =>
    objs.map(item => {
      if (!checkVisible(item.visible, props.frame)) return
      let newParams
      if (Object.keys(item.keyframes).length > 0) {
        const keyParams = calcParams(item.keyframes, props.frame)
        if (Object.keys(item.keyframes).length > 0) {
          newParams = Object.assign({}, item.params, keyParams)
        }
      }
      return <item.type
        key={item.id}
        id={item.id}
        imgId={item.imgId}
        params={newParams || item.params}>
        {item.children && renderObj(item.children)}
      </item.type>
    })
  return renderObj(props.objects)
}

const mapStateToProps = state => ({
  frame: state.timeline.frame
})
export default connect(mapStateToProps)(ObjectsList)
