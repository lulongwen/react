import React, { Component, Fragment } from 'react'
import { Button, Card, message } from 'antd'
import './ui.less'

class Messages extends Component {
  render () {
    return (
      <Fragment>
        <Card
          title='全局提示框'
          className='card-wrap'>
          <Button onClick={() => this.fnMessage('success')}>success</Button>
          <Button onClick={() => this.fnMessage('info')}>info</Button>
          <Button onClick={() => this.fnMessage('error')}>error</Button>
          <Button onClick={() => this.fnMessage('warn')}>warn</Button>
          <Button onClick={() => this.fnMessage('loading')}>loading</Button>
        </Card>
      </Fragment>
    )
  }
  
  fnMessage = type => {
    message.destroy()
    if (type === 'loading') {
      return message[type]('信息查询中...', 3)
        .then(() => message.success('好了', 1))
    }
    message[type]('恭喜您，注册成功')
  }
}

export default Messages

