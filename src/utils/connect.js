import { store } from 'store'

export default (mapProps, onChange) => {
  let currentState

  const handleChange = () => {
    let nextState = mapProps(store.getState())
    if (findDiff(nextState, currentState)) {
      currentState = nextState
      onChange(currentState)
    }
  }

  const findDiff = (nextState, currentState) => {
    if (!currentState) return true
    for (let key in nextState) {
      if (nextState[key] !== currentState[key]) return true
    }
    return false
  }

  let unsubscribe = store.subscribe(handleChange)
  handleChange()
  return unsubscribe
}
