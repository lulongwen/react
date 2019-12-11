import React, { Component } from 'react'

import { Row, Col } from 'antd'
import Header from './Header'
import Footer from './Footer'
import AsideMenu from "./Menu"
// import Home from './Home'

class Admin extends Component {
  
  render () {
    return (
      <Row>
        <Col span={3}>
          <AsideMenu />
        </Col>
        
        <Col span={21}>
          <Header />
          <div className="content">
            {/* <Home /> */}
            { this.props.children }
          </div>
          <Footer />
        </Col>
      </Row>
    )
  }
  
}

export default Admin
