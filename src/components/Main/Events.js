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
    const { selection, textEditing } = this.props
    if (selection.length === 1 && !textEditing) removeObject(selection[0])
  }

  render = () => null
}

const mapStateToProps = state => ({
  selection: state.control.selection,
  textEditing: state.control.textEditing
})
export default connect(mapStateToProps)(Events)
