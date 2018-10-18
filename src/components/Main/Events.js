import React from 'react'
import { connect } from 'react-redux'
import { removeObject } from 'reducers/objects/objects.actions'
import { removeMask } from 'reducers/masks/masks.actions'
import { removeImage } from 'reducers/images/images.actions'
import { typeById, types } from 'utils'

class Events extends React.Component {
  componentDidMount () {
    document.addEventListener('keydown', e => {
      if (e.srcElement.nodeName !== 'BODY') return
      switch (e.keyCode) {
        case 8:
        case 46:
          this.removeElement()
      }
    })
  }

  removeElement = () => {
    const { selection, tool } = this.props
    if (selection &&
      selection.length === 1 &&
      tool === 'standard') {
      const type = typeById(selection[0])
      if (type === types.OBJECT) removeObject(selection[0])
      else if (type === types.MASK) removeMask(selection[0])
      else if (type === types.IMAGE) removeImage(selection[0])
    }
  }

  render = () => null
}

const mapStateToProps = state => ({
  selection: state.control.selection,
  tool: state.control.tool
})
export default connect(mapStateToProps)(Events)
