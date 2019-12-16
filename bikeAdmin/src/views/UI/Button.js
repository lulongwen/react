import React, { Component, Fragment } from 'react'
import { Button, Card, Radio } from 'antd'
import './ui.less'

class Buttons extends Component {
  state = {
    loading: false,
    size: 'default'
  }
  
  closeLoading = () => this.setState(() => ({ loading: !this.state.loading }))
  
  fnChange = ev => this.setState(() => ({size: ev.target.value}))
  
  render () {
    return (
      <Fragment>
        <Card
          title='常用按钮'
          className='card-wrap'>
          <Button type="primary">提交</Button>
          <Button>取消</Button>
          <Button type="dashed">查看</Button>
          <Button type="danger">删除</Button>
          <Button disabled>禁用</Button>
        </Card>
  
        <Card
          title='图形按钮'
          className='card-wrap'>
          <Button icon="plus">添加</Button>
          <Button icon='edit'>编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape='circle' />
          <Button icon='search' type='primary'>搜索</Button>
          <Button icon='download' type='info'>下载</Button>
        </Card>
  
        <Card
          title='loading 按钮'
          className='card-wrap'>
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type='danger' shape='circle' loading={this.state.loading} />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape='circle' loading={this.state.loading} />
          <Button type='dashed' onClick={this.closeLoading}>关闭</Button>
        </Card>
  
        <Card
          title='按钮组'
          className='card-wrap'>
          <Button.Group>
            <Button type='primary' icon='left'>返回</Button>
            <Button type='primary' icon='right'>前进</Button>
          </Button.Group>
        </Card>
  
        <Card
          title='按钮大小'
          className='card-wrap'>
          <Radio.Group defaultValue='default' onChange={this.fnChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
  
          <div style={{marginTop: '20px'}}>
            <Button type="primary" size={this.state.size}>确认</Button>
            <Button size={this.state.size}>取消</Button>
            <Button type="dashed" ghost size={this.state.size}>查看</Button>
          </div>
          <div style={{marginTop: '20px'}}>
            <Button type="danger" block size={this.state.size}>删除</Button>
          </div>
        </Card>
      </Fragment>
    )
  }
}

export default Buttons
