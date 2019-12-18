import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { Menu } from 'antd'
import menuList from '@/router/menuList'

// react-redux
import { connect } from 'react-redux'
import { actionMenuClick } from 'store/actionCreators'

const { SubMenu, Item } = Menu
// 菜单数组渲染成组件
const initMenu = (data=[]) => data.map(({title, key, children}) => {
  if (!Array.isArray(data)) throw new Error('数据格式错误')
  
  return children
    ? <SubMenu title={title} key={key}>
        {initMenu(children)}
      </SubMenu>
    : <Item title={title} key={key}>
        <NavLink to={`/${key}`}>{title}</NavLink>
      </Item>
})

const AsideMenu = ({ menuKey, defaultKey, menuClick }) => (
  <Fragment>
    <header className="logo">
      <img src="/assets/images/logo.svg" alt="管理后台"/>
      <h1 className='logo-name'>管理后台</h1>
    </header>
    
    <Menu
      defaultSelectedKeys={defaultKey}
      selectedKeys={menuKey}
      theme='dark'
      onClick={menuClick}>
      { initMenu(menuList) }
    </Menu>
  </Fragment>
)

// 把 store 的数据映射到 props 里面，state 指的是 store 的数据
const mapStateToProps = ({menuKey, defaultKey}) => ({
  menuKey, defaultKey
})

// 把store 的 dispatch 方法，挂载到 props 上
const mapDispatchToProps = dispatch => ({
  menuClick ({ item: {props}, key }) {
    // ant-menu-item-selected 选中的类
    const action = actionMenuClick({ menuKey: `/${key}`, menuName: props.title })
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu)
