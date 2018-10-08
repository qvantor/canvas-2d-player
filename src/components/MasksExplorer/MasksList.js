import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MaskItem from './MaskItem'

const MasksList = (props) => {
  const { masks, selection } = props
  return (
    <div className='masks-explorer'>
      {Object.keys(masks).map(key =>
        <MaskItem
          isSelected={selection && selection[0] === key}
          key={key}
          id={key}
          mask={masks[key]} />
      )}
    </div>
  )
}

MasksList.propTypes = {
  masks: PropTypes.object,
  selection: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => ({
  masks: state.masks,
  selection: state.control.selection
})
export default connect(mapStateToProps)(MasksList)
