import { store } from 'store'

export default (mapProps, onChange) => {
  let currentState
  const findDiff = (nextState, currentState) => {
    if (!currentState) return true
    for (let key in nextState) {
      if (nextState[key] !== currentState[key]) return true
    }
    return false
  }

  const handleChange = () => {
    let nextState = mapProps(store.getState())
    if (findDiff(nextState, currentState)) {
      currentState = nextState
      onChange(currentState)
    }
  }

  const unsubscribe = store.subscribe(handleChange)
  handleChange()

  return unsubscribe
}
