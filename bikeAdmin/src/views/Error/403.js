import React, { Component } from 'react'

class Error404 extends Component {
  render () {
    let style = {
      backgroundColor: 'rgba(212, 193, 242, 0.68)',
      padding: '20px'
    }
    return (
      <div style={style}>
        <h1 style={{fontSize: '100px', color: '#f00'}}>403</h1>
      </div>
    )
  }
}

export default Error404
