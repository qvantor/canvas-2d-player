import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setDuration } from 'reducers/timeline/timeline.actions'

import InputGenerator from 'components/FormGenerator/InputGenerator'

const Duration = (props) => {
  const { frames } = props
  const schema =
    {
      type: 'Number',
      onChange: setDuration
    }
  return (
    <div className='mt-3 row'>
      <div className='col-4 text-right p-0'>
        <small>Duration</small>
      </div>
      <div className='col-8'>
        <InputGenerator item={schema} value={frames} />
      </div>
    </div>
  )
}

Duration.propTypes = {
  frames: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  frames: state.timeline.frames
})
export default connect(mapStateToProps)(Duration)
