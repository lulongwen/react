import React from 'react'
import { Row, Col } from 'antd'
import { nowtime } from '@/utils'

// react-redux
import { connect } from 'react-redux'
import { actionLogOut } from 'store/actionCreators'

const Header = ({ user, menuName, logOut }) => (
  <header className='header'>
    <Row className="header-top">
      <Col span={24}>
        <span>欢迎，{user.name}</span>
        <a onClick={logOut}>退出</a>
      </Col>
    </Row>
    
    <Row className='header-subnav'>
      <Col span={4} className='header-title'>{menuName}</Col>
      <Col span={20} className='header-weather'>
        <span className='nowtime'>{ nowtime() }</span>
        <span className="weather">
          123
        </span>
      </Col>
    </Row>
  </header>
)


// 把 store 的数据映射到 props 里面，state 指的是 store 的数据
const mapStateToProps = ({ menuName, user }) => ({ menuName, user })

// 把store 的 dispatch 方法，挂载到 props 上
const mapDispatchToProps = dispatch => ({
  logOut () {
    console.log('click logOut')
    // eslint-disable-next-line
    const action = actionLogOut()
    // dispatch(action)
  },
  weather () {
  
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
