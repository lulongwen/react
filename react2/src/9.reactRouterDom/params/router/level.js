import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
  render () {
    return (
      <div style={{backgroundColor: 'rgba(212, 193, 242, 0.68)', padding: '20px'}}>
        <h1><mark>这是一个嵌套路由的页面</mark></h1>
        <Link to='/home/235'>嵌套路由11</Link>
        <br/>
        <Link to='/home/id-23'>嵌套路由22</Link>
        <br/>
        
        <div style={{backgroundColor: '#eee', padding: '20px 20px 120px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Contact
