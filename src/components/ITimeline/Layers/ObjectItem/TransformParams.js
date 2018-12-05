import React from 'react'
import PropTypes from 'prop-types'
import { typeById, types } from 'utils'
import { getClassNames } from 'dynamic-class-list'
import { setParams, addKeyFrameParam, removeKeyFrameParam } from 'reducers/objects/objects.actions'
import { setMaskParams } from 'reducers/masks/masks.actions'

import InputGenerator from 'components/FormGenerator/InputGenerator'
import { renderTimelineWithKeyframes } from 'components/FormGenerator/Rows'

import KeyframesControl from './KeyframesControl'
import KeyFrames from './KeyFrames'

const TransformParams = (props) => {
  const { item, rightWidth, width, scale } = props
  const onChange = (e, schema) => {
    const type = typeById(item.id)
    if (type === types.OBJECT) setParams(item.id, { [schema.key]: e })
    if (type === types.MASK) setMaskParams(item.id, { [schema.key]: e })
  }
  const keyframeClick = key => item.keyframes[key]
    ? removeKeyFrameParam(item.id, key)
    : addKeyFrameParam(item.id, key)

  const positionSchema = [
    {
      type: 'DraggableNumber',
      key: 'opacity',
      name: 'Opacity',
      step: 0.01,
      min: 0,
      max: 1,
      onChange,
      formatter: 'numPercents',
      render: renderTimelineWithKeyframes,
      keyframeClick
    },
    {
      type: 'DraggableNumber',
      name: 'Angle',
      key: 'angle',
      step: 0.1,
      onChange,
      render: renderTimelineWithKeyframes,
      keyframeClick
    },
    {
      type: 'DraggableNumber',
      name: 'Top',
      key: 'top',
      onChange,
      render: renderTimelineWithKeyframes,
      keyframeClick
    },
    {
      type: 'DraggableNumber',
      name: 'Left',
      key: 'left',
      onChange,
      render: renderTimelineWithKeyframes,
      keyframeClick
    },
    {
      type: 'DraggableNumber',
      key: 'scaleX',
      name: 'Scale X',
      step: 0.01,
      formatter: 'numPercents',
      onChange,
      render: renderTimelineWithKeyframes,
      keyframeClick
    },
    {
      type: 'DraggableNumber',
      key: 'scaleY',
      name: 'Scale Y',
      step: 0.01,
      formatter: 'numPercents',
      onChange,
      render: renderTimelineWithKeyframes,
      keyframeClick
    }]

  return (
    <div className='transform-params'>
      {positionSchema.map(schema =>
        <div
          className={getClassNames('value-line', { 'line-active': !!item.keyframes[schema.key] })}
          key={schema.key}>
          <div className='value-line-left' style={{ width: rightWidth }}>
            <KeyframesControl keyframes={item.keyframes[schema.key]} />
            <InputGenerator item={schema} value={item.params[schema.key]} />
          </div>
          <div className='value-line-right'>
            {item.keyframes[schema.key] &&
            <KeyFrames
              id={item.id}
              keyframes={item.keyframes[schema.key]}
              scale={scale}
              schemaKey={schema.key}
              width={width - rightWidth} />}
          </div>
        </div>
      )}
    </div>)
}

TransformParams.propTypes = {
  item: PropTypes.object.isRequired,
  rightWidth: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired
}
TransformParams.defaultProps = {}

export default TransformParams
