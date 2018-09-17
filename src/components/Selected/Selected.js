import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Rect from './Rect'
import Text from './Text'

class Selected extends Component {
  render () {
    const { selection, visible } = this.props
    if (!selection || selection.length !== 1) return null
    const selected = selection[0]
    const obj = visible.find(item => item.id === selected)

    return (
      <div className='pt-3'>
        {obj.type === 'rect' && <Rect obj={obj} />}
        {obj.type === 'textbox' && <Text obj={obj} />}
      </div>
    )
  }
}

Selected.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string),
  visible: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
  selection: state.control.selection,
  visible: state.objects.visible
})
export default connect(mapStateToProps)(Selected)
