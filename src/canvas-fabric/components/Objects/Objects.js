import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'reducers/objects/objects.actions'

class Objects extends Component {
  render () {
    const { visible } = this.props

    return (
      <collection>
        {visible.map(item => {
          return <item.type
            key={item.id}
            id={item.id}
            params={item.params} />
        })}
      </collection>
    )
  }
}

const mapStateToProps = state => ({
  visible: state.objects.visible
})
export default connect(mapStateToProps)(Objects)
