import { connect, typeById, types } from 'utils/'

import { addMask, updateMask } from '../core/masks'

export default (canvas) => {
  let state = null

  const add = (id, maskObj) => {
    if (state && state.id !== id) remove()
    const mask = addMask(id, maskObj)

    canvas.canvas.add(mask)
    canvas.renderer.render()

    state = { id, mask }
  }

  const update = (id, maskObj) => {
    updateMask(id, maskObj)
    canvas.renderer.render()
  }

  const remove = () => {
    if (!state) return
    canvas.canvas.remove(state.mask)
    canvas.renderer.render()
    state = null
  }

  const onUpdate = (props) => {
    const { selection, masks } = props
    if (!selection) return remove()
    const selected = selection[0]
    const selectedType = typeById(selected)
    if (selectedType !== types.MASK) return remove()

    if (!state) add(selected, masks[selected])
    else if (state.id === selected) masks[selected] ? update(selected, masks[selected]) : remove()
    else {
      remove()
      add(selected, masks[selected])
    }
  }
  const mapStateToProps = state => ({
    selection: state.control.selection,
    masks: state.masks
  })

  connect(mapStateToProps, onUpdate)
}
