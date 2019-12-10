import React, { Component, Fragment } from 'react'

import { Menu } from 'antd'
import menuList from '@/router/menuList'

const { SubMenu } = Menu

class AsideMenu extends Component {
  
  render () {
    return (
      <Fragment>
        <header className="logo">
          <img src="/assets/images/logo.svg" alt="管理后台"/>
          <h1 className='logo-name'>管理后台</h1>
        </header>
        
        <Menu theme='dark'>
          { this.state.menu }
        </Menu>
      </Fragment>
    )
  }
  
  componentWillMount() {
    const menu = this.initMenu(menuList)
    // console.log('menu', menu)
    this.setState(() => ({ menu }))
  }
  
  // 初始化菜单渲染列表
  initMenu = data => data.map(({title, key, children}) => {
    if (children) {
      return (
        <SubMenu title={title} key={key}>
          {this.initMenu(children)}
        </SubMenu>
      )
    }
    return <Menu.Item title={title} key={key}>{title}</Menu.Item>
  })
}

export default AsideMenu
