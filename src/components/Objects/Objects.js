import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Button, Popover } from 'antd'
import { addObject } from 'reducers/objects/objects.actions'
import { createObj } from 'reducers/objects/objects.utils'
import { id } from 'utils/'
import Img from './Img'

class Objects extends Component {
  render () {
    const { list } = this.props
    const types = {
      img: Img
    }
    return (
      <Popover
        trigger='click'
        placement='right'
        content={
          <div className='objects-creator pt-1'>
            {list.map(item => {
              const TypeComponent = types[item.type]
              if (TypeComponent) return <TypeComponent key={item.type} item={item} />
              return (<Button
                className={`mr-1 ${item.name}`}
                onClick={() => addObject(createObj(item))}
                key={item.type}>
                {item.name}
              </Button>)
            })}
          </div>}>
        <Button icon='plus-circle' className='w-100 rounded-0' />
      </Popover>)
  }
}

Objects.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
  list: state.objTypes.list
})
export default connect(mapStateToProps)(Objects)
