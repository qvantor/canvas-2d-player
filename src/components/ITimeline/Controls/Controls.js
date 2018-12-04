import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { pause, play } from 'reducers/timeline/timeline.actions'

const { Group } = Button

const Controls = (props) => {
  const { playing } = props

  return (
    <div className='timeline-controls'>
      <Group size='small'>
        <Button
          type='primary'
          onClick={e => playing ? pause() : play()}
          icon={playing ? 'pause-circle-o' : 'play-circle-o'} />
        <Button type='primary' icon='setting' />
      </Group>
    </div>
  )
}

Controls.propTypes = {
  playing: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  playing: state.timeline.play
})
export default connect(mapStateToProps)(Controls)
