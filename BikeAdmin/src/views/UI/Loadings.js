import React, { Fragment } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'

const Loading = () => {
  const icon = <Icon type='loading' style={{fontSize: 24}} />
  return (
    <Fragment>
      <Card
        title=''
        className='card-wrap'
      >
        <Spin size='small' />
        <Spin style={{margin: '0 10px'}} />
        <Spin size='large' />
        <Spin indicator='icon' style={{marginLeft: 10}} />
      </Card>
    </Fragment>
  )
}

export default Loading
