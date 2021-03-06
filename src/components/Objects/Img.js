import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'
import Popover from 'antd/lib/popover'
import Input from 'antd/lib/input'
import { addImage } from 'reducers/images/images.actions'

class Img extends Component {
  state = { value: null }

  render () {
    const { item } = this.props
    const { value } = this.state

    return (
      <Popover placement='bottom' content={<form onSubmit={e => {
        e.preventDefault()
        addImage(value)
      }}>
        <Input
          onChange={e => this.setState({ value: e.target.value })}
          placeholder='Image url'
          value={value} />
      </form>} trigger='click'>
        <Button
          className='mr-1'>
          {item.name}
        </Button>
      </Popover>
    )
  }
}

Img.propTypes = {
  item: PropTypes.object
}

export default Img
