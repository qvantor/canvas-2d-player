import React from 'react'

export const renderField = (input, params) => (
  <div className='row'>
    <div className='col-md-6'>{params.name}</div>
    <div className='col-md-6'>{input}</div>
  </div>)
