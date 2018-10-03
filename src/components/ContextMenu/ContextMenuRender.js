import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

class ContextMenuRender extends PureComponent {
  proxyEvent = (item, name) => {
    const proxy = { close: this.props.close }
    if (item[name]) return (e) => item[name](e, proxy)
  }

  renderMenu (schema) {
    return schema.map((item, i) =>
      <li
        onClick={this.proxyEvent(item, 'onClick')}
        className='list-item'
        key={i}>
        {item.item}
      </li>)
  }

  calcPos = () => {
    const { left, top, schema } = this.props
    const padding = 5
    const width = 200
    const docWidth = window.innerWidth
    const pos = { left: left + padding, top: top - 110 }

    if (width + left > docWidth) {
      pos.left = left - width - padding
    }

    return pos
  }

  render () {
    const { domRef, schema } = this.props

    return (
      ReactDOM.createPortal(
        <ul
          style={this.calcPos()}
          className='context-menu-portal'
          ref={domRef}>
          {this.renderMenu(schema)}
        </ul>,
        document.body)
    )
  }
}

export default ContextMenuRender
