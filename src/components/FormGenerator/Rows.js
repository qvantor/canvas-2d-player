import React from 'react'
import { Icon } from 'antd'

export const renderField = (input, params) => (
  <div className='row'>
    <div className='col-md-6'>{params.name}</div>
    <div className='col-md-6'>{input}</div>
  </div>)

export const renderTimelineField = (input, params) =>
  (<div className='row m-0'>
    <div className='col-md-8 p-0'>{params.name}</div>
    <div className='col-md-4 p-0'>{input}</div>
  </div>)

export const renderTimelineWithKeyframes = (input, params) =>
  (<div className='row m-0'>
    <div className='col-md-2 p-0 clock-button'>
      <Icon
        type='clock-circle'
        className='c-pointer'
        onClick={() => params.keyframeClick(params.key)} />
    </div>
    <div className='col-md-6 p-0'>{params.name}</div>
    <div className='col-md-4 p-0'>{input}</div>
  </div>)
