import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'reducers/objects/objects.actions'

class Objects extends Component {
  renderObj = (objs) =>
    objs.map(item => {
      return <item.type
        key={item.id}
        id={item.id}
        params={item.params}>{item.children && this.renderObj(item.children)}</item.type>
    })

  render () {
    const { visible } = this.props

    return (
      <collection>
        {this.renderObj(visible)}
      </collection>
    )
  }
}

const mapStateToProps = state => ({
  visible: state.objects.visible
})
export default connect(mapStateToProps)(Objects)
