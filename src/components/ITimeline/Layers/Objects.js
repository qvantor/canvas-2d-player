import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Objects = (props) => {
  const { order, objects } = props
  return (
    <div className='timeline-objects'>
      {order.map(key => {
        const item = objects[key]

        return (<div className='object' key={key}>{item.name}</div>)
      })}
    </div>
  )
}

Objects.propTypes = {
  height: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  order: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = state => ({
  order: state.objOrder,
  objects: state.objects
})
export default connect(mapStateToProps)(Objects)
