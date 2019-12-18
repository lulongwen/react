import React, { Fragment } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'

const Loadings = () => {
  const icon = <Icon type='loading' style={{fontSize: 24}} />
  return (
    <Fragment>
      <Card
        title='Spin用法'
        className='card-wrap'
      >
        <Spin size='small' />
        <Spin style={{margin: '0 30px'}} />
        <Spin indicator={icon} style={{marginRight: 30}} />
        <Spin size='large' />
      </Card>
  
      <Card
        title='Alert 警告 & Spin'
        className='card-wrap'
      >
        <Alert
          message='送元二使安西'
          description='渭城朝雨浥轻尘，客舍青青柳色新'
          type='info'
          className='card-wrap'
        />
        
        <Spin className='card-wrap'>
          <Alert
            message='山居秋暝'
            description='空山新雨后，天气晚来秋。'
            type='info'
            className='card-wrap'
          />
        </Spin>
  
        <Spin tip='加载中' className='card-wrap'>
          <Alert
            message='安西都护府'
            description='劝君更尽一杯酒，西出阳关无故人'
            type='warning'
            className='card-wrap'
          />
        </Spin>
  
        <Spin indicator={icon}>
          <Alert
            message='安西都护府'
            description='劝君更尽一杯酒，西出阳关无故人'
            type='warning'
            className='card-wrap'
          />
        </Spin>
      </Card>
    </Fragment>
  )
}

export default Loadings
