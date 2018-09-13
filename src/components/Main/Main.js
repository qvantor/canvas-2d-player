import React from 'react'
import { setParams } from 'reducers/objects/objects.actions'

export default () =>
  (<div>
    <button onClick={e => setParams('asdasdsad1', { angle: Math.random() * 360 })}>click</button>
  </div>)
