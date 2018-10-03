import React, { PureComponent } from 'react'

import ContextMenuRender from './ContextMenuRender'

class ContextMenu extends PureComponent {
  state = { showMenu: false, left: 0, top: 0 }
  menu = React.createRef()
  menuContainer = React.createRef()

  componentDidMount () {
    document.addEventListener('click', e => this.disableMenu(e))
    document.addEventListener('contextmenu', e => this.disableMenu(e, true))
  }

  disableMenu = (e, context) => {
    if (!this.menu.current) return
    if (this.menu.current.contains(e.target)) return
    if (context && this.menuContainer.current.contains(e.target)) return
    this.setState({ showMenu: false })
  }

  onContextMenu = (e) => {
    e.preventDefault()
    this.setState({ showMenu: true, top: e.screenY, left: e.screenX })
  }

  render () {
    const { children, schema } = this.props
    const { showMenu, left, top } = this.state
    return (
      <div
        ref={this.menuContainer}
        className='context-menu'
        onContextMenu={this.onContextMenu}>
        {children}
        {showMenu && <ContextMenuRender
          close={() => this.setState({ showMenu: false })}
          left={left}
          top={top}
          domRef={this.menu}
          schema={schema} />}
      </div>
    )
  }
}

export default ContextMenu
