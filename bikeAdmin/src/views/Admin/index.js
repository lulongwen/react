import React from 'react'

import { Row, Col } from 'antd'
import Header from 'components/Header'
import Footer from 'components/Footer'
import AsideMenu from "components/Menu"

const Admin = props => (
  <Row>
    <Col span={3}>
      <AsideMenu />
    </Col>
    
    <Col span={21} className='content'>
      <Header />
      <div className="main">
        { props.children }
      </div>
      <Footer />
    </Col>
  </Row>
)

export default Admin
