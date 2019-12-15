import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { Menu } from 'antd'
import menuList from '@/router/menuList'

// react-redux
import { connect } from 'react-redux'
import { } from '../'

const { SubMenu } = Menu

class AsideMenu extends Component {
  state = {
    menu: [],
    defaultKey: '/home',
    key: ''
  }
  
  render () {
    const { menu, key, defaultKey } = this.state
    return (
      <Fragment>
        <header className="logo">
          <img src="/assets/images/logo.svg" alt="管理后台"/>
          <h1 className='logo-name'>管理后台</h1>
        </header>
        
        <Menu
          defaultSelectedKeys={defaultKey}
          selectedKeys={ key }
          theme='dark'
          onClick={this.menuClick}
        >
          { menu }
        </Menu>
      </Fragment>
    )
  }
  
  UNSAFE_componentWillMount () {
    const menu = this.initMenu(menuList)
    this.setState(() => ({ menu, defaultKey: '/home' }))
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
    return <Menu.Item title={title} key={key}>
      <NavLink to={`/${key}`}>{title}</NavLink>
    </Menu.Item>
  })
  
  // 菜单点击
  menuClick = ({ item, key }) => {
    // ant-menu-item-selected
    console.log('key', `/${key}`)
    this.setState(() => ({key: `/${key}`}))
  }
}

export default AsideMenu
