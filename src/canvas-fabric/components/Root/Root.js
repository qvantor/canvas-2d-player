import React, { PureComponent } from 'react'

import Mask from '../Mask/Mask'
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
        {renderObj && <Objects />}
      </collection>
    )
  }
}

export default Root
