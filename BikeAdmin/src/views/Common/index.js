import React, { Fragment } from 'react'
import { Row } from 'antd'
import Header from './Header'
import 'assets/less/index.less'

const Common = props => (
  <Fragment>
    <Row className='common-header'>
      <Header />
    </Row>
    <Row className='common-content'>
      { props.children }
    </Row>
  </Fragment>
)

export default Common
