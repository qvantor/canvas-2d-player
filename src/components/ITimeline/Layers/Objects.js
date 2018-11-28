import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ObjectItem from './ObjectItem/ObjectItem'

const Objects = (props) => {
  const { order, objects, rightWidth } = props
  return (
    <div className='timeline-objects border-top border-dark' style={{ width: rightWidth }}>
      {order.map((key, index) => <ObjectItem key={key} item={objects[key]} index={index} />)}
    </div>
  )
}

Objects.propTypes = {
  rightWidth: PropTypes.number.isRequired,
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  objects: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  order: state.objOrder,
  objects: state.objects
})
export default connect(mapStateToProps)(Objects)
