import React, { Component } from 'react'

import { Row, Col } from 'antd'
import Header from './Header'
import Footer from './Footer'
import AsideMenu from "./Menu"
import Main from './Main'

class Home extends Component {
  
  render () {
    return (
      <Row>
        <Col span={3}>
          <AsideMenu />
        </Col>
        <Col span={21}>
          <Header />
          <Main>Main</Main>
          <Footer />
        </Col>
      </Row>
    )
  }
  
}

export default Home
