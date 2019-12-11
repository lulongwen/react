import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  render () {
    return (
      <div style={{backgroundColor: 'rgba(212, 193, 242, 0.68)', padding: '20px'}}>
        <h1><mark>这是一个嵌套路由的页面</mark></h1>
        <Link to='/home/a'>嵌套路由11</Link>
        
        <div style={{backgroundColor: '#eee', padding: '20px 20px 120px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Contact
