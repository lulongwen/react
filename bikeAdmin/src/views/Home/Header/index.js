import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { nowtime } from '@/utils'

class Header extends Component {
  state = {}
  
  componentWillMount() {
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
            <a href="#">退出</a>
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

export default Header
