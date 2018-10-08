import React from 'react'
import { connect } from 'react-redux'
import { removeObject } from 'reducers/objects/objects.actions'
import { removeMask } from 'reducers/masks/masks.actions'
import { typeById } from 'utils/'

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
      tool === 'standard') {
      const type = typeById(selection[0])
      if (type === 'object') removeObject(selection[0])
      if (type === 'mask') removeMask(selection[0])
    }
  }

  render = () => null
}

const mapStateToProps = state => ({
  selection: state.control.selection,
  tool: state.control.tool,
  textEditing: state.control.textEditing
})
export default connect(mapStateToProps)(Events)
