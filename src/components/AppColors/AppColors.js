import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import FormGenerator from '../FormGenerator/FormGenerator'

import { setColors } from 'reducers/control/control.actions'

const AppColors = (props) => {
  const { colors } = props
  const common = {
    type: 'Color',
    key: 'color',
    name: 'Color'
  }
  const colorSchemaFirst = [{ ...common, onChange: e => setColors([e, colors[1]]) }]
  const colorSchemaSecond = [{ ...common, onChange: e => setColors([colors[0], e]) }]
  return (
    <div className='app-colors mt-3'>
      <Icon
        type='enter'
        theme='outlined'
        className='swap-icon c-pointer'
        alt='Switch colors'
        onClick={() => setColors([colors[1], colors[0]])}
      />
      <FormGenerator className='first-color' schema={colorSchemaFirst} values={{ color: colors[0] }} />
      <FormGenerator className='second-color' schema={colorSchemaSecond} values={{ color: colors[1] }} />
    </div>
  )
}

AppColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = state => ({
  colors: state.control.colors
})
export default connect(mapStateToProps)(AppColors)
