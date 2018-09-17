import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from 'antd/lib/button'
import { addObject } from 'reducers/objects/objects.actions'
import id from 'utils/id'
import Img from './Img'

class Objects extends Component {
  render () {
    const { list } = this.props
    const types = {
      img: Img
    }
    return (
      <div>
        {list.map(item => {
          const TypeComponent = types[item.type]
          if (TypeComponent) return <TypeComponent key={item.type} item={item} />
          return (<Button
            className='mr-1'
            onClick={() => addObject({ id: id(), type: item.type, params: item.params })}
            key={item.type}>
            {item.name}
          </Button>)
        })}
      </div>
    )
  }
}

Objects.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
  list: state.objTypes.list
})
export default connect(mapStateToProps)(Objects)
