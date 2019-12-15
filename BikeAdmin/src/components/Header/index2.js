import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { nowtime } from '@/utils'

// react-redux
import { connect } from 'react-redux'
import { actionMenuClick } from 'store/actionCreators'

class Header extends Component {
  UNSAFE_componentWillMount() {
    this.setState(() => ({
      username: '超级管理员'
    }))
  }
  
  render () {
    return (
      <header className='header'>
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.username}</span>
            <a >退出</a>
          </Col>
        </Row>
        
        <Row className='header-subnav'>
          <Col span={4} className='header-title'>首页</Col>
          <Col span={20} className='header-weather'>
            <span className='nowtime'>{ nowtime() }</span>
            <span className="weather">
            {this.state.weather}
          </span>
          </Col>
        </Row>
      </header>
    )
  }
}

// 把 store 的数据映射到 props 里面，state 指的是 store 的数据
const mapStateToProps = ({menuName}) => ({ menuName })

// 把store 的 dispatch 方法，挂载到 props 上
const mapDispatchToProps = dispatch => ({
  menuClick ({ item: {props}, key }) {
    // ant-menu-item-selected 选中的类
    const action = actionMenuClick({ menuKey: `/${key}`, menuName: props.title })
    dispatch(action)
  }
})

export default connect(mapStateToProps, null)(Header)
