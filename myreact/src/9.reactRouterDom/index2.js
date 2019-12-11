import React, { Component } from 'react'
import { Link } from "react-router-dom";

// 1 路由和页面分开，导出 HTML 页面
class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/home'>首页2</Link></li>
          <li><Link to='/about'>关于我2</Link></li>
          <li><Link to='/topic'>知识点2</Link></li>
          <li><Link to='/contact'>联系方式2</Link></li>
          <li><Link to='/login'>登录页2</Link></li>
        </ul>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default App
