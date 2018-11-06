import React from 'react'
import PropTypes from 'prop-types'

import TimelineExplorer from './TimelineExplorer'

const ITimeline = (props) => {
  return (
    <div className='timeline bg-asbestos border-top border-dark'>
      <TimelineExplorer />
    </div>
  )
}

ITimeline.propTypes = {}
ITimeline.defaultProps = {}

export default ITimeline
