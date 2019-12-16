import React, { Component } from 'react'
import { Button } from 'antd'

class Buttons extends Component {
  render () {
    return (
      <div>
        <Button type="primary">Imooc</Button>
        <Button>Imooc</Button>
        <Button type="dashed">Imooc</Button>
        <Button type="danger">Imooc</Button>
        <Button disabled>Imooc</Button>
      </div>
    )
  }
}

export default Buttons
