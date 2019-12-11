import React, { Component } from 'react'

class Login extends Component {
  render () {
    let style = {
      backgroundColor: '#f9a3a3',
      padding: '20px'
    }
    return (
      <div style={style}>
        <h2><mark>这是 登录页面页面</mark></h2>
        <input type="text" placeholder='请输入用户名'/>
        <button>登录</button>
      </div>
    )
  }
}

export default Login
