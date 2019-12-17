import React, { Component } from 'react'
import { Link } from "react-router-dom";

// 1 路由和页面分开，导出 HTML 页面
class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/home'>首页33</Link></li>
          <li><Link to='/about'>关于我33</Link></li>
          <li><Link to='/topic'>知识点33</Link></li>
          <li><Link to='/login'>登录页33</Link></li>
          <li><Link to='/login2'>没有找到的404</Link></li>
        </ul>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default App
