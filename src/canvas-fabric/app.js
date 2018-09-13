import React from 'react'
import render from './render'

import { store } from '../store/'

import App from './components/app.component'

render(<App store={store} />, document.getElementById('canvas'))
