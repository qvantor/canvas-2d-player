import React from 'react'
import { connect } from 'react-redux'
import { removeObject } from 'reducers/objects/objects.actions'

class Events extends React.Component {
  componentDidMount () {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 8:
        case 46:
          this.removeElement()
      }
    })
  }

  removeElement = () => {
    const { selection, textEditing, tool } = this.props
    if (selection &&
      selection.length === 1 &&
      !textEditing &&
      tool === 'standard') removeObject(selection[0])
  }

  render = () => null
}

const mapStateToProps = state => ({
  selection: state.control.selection,
  tool: state.control.tool,
  textEditing: state.control.textEditing
})
export default connect(mapStateToProps)(Events)
