import React, { Component, Fragment } from 'react'
import { Button, Card, notification } from 'antd'
import './ui.less'

class Messages extends Component {
  render () {
    return (
      <Fragment>
        <Card
          title='通知提醒'
          className='card-wrap'>
          <Button onClick={() => this.fnNotice({type: 'success'})}>success</Button>
          <Button onClick={() => this.fnNotice({type: 'info', placement: 'bottomRight'})}>info</Button>
          <Button onClick={() => this.fnNotice({type: 'error'})}>error</Button>
          <Button onClick={() => this.fnNotice({type: 'warn'})}>warn</Button>
        </Card>
      </Fragment>
    )
  }
  
  fnNotice = ({ type, placement }) => {
    notification.destroy()
    if (placement) {
      notification.config({ placement })
    }
    notification[type]({
      message: '发工资了',
      description: '上月全勤，奖励一万元'
    })
  }
}

export default Messages

