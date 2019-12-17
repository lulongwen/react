import React, { Component } from 'react'

class Params extends Component {
  render () {
    return (
      <div>
        <h2>测试动态路由参数</h2>
        <p>动态路由参数是：<mark>{this.props.match.params.id}</mark></p>
        <pre>
          {JSON.stringify(this.props.match)}
        </pre>
      </div>
    )
  }
}

export default Params
