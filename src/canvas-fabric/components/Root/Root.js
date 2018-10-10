import React, { PureComponent } from 'react'

import Mask from '../Mask/Mask'
import SelectedMask from '../SelectedMask/SelectedMask'
import Objects from '../Objects/Objects'

class Root extends PureComponent {
  state = { renderObj: false }

  componentDidMount () {
    this.setState({ renderObj: true })
  }

  render () {
    const { renderObj } = this.state

    return (
      <collection>
        <Mask />
        <SelectedMask />
        {renderObj && <Objects />}
      </collection>
    )
  }
}

export default Root
