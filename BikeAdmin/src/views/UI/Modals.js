import React, { Component, Fragment } from 'react'
import { Button, Card, Modal } from 'antd'
import './ui.less'

const { confirm } = Modal
class Modals extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false
  }
  
  render () {
    return (
      <Fragment>
        <Card title='基础模态框' className='card-wrap'>
          <Button type='primary'
            onClick={() => this.fnOpen('visible1')}>确认弹窗</Button>
          <Button type='dashed'
            onClick={() => this.fnOpen('visible2')}>自定义按钮文字</Button>
          <Button type='danger'
            onClick={() => this.fnOpen('visible3')}>距离顶部 20px</Button>
          <Button type='primary'
            onClick={() => this.fnOpen('visible4')}>垂直水平居中</Button>
        </Card>
  
        <Card title='信息确认框 一个确认按钮' className='card-wrap'>
          <Button type='primary'
            onClick={() => this.fnConfirm('confirm')}>confirm</Button>
          <Button type='dashed'
            onClick={() => this.fnConfirm('info')}>info</Button>
          <Button type='primary'
            onClick={() => this.fnConfirm('success')}>success</Button>
          <Button type='primary'
            onClick={() => this.fnConfirm('warning')}>warning</Button>
          <Button type='danger'
            onClick={() => this.fnConfirm('error')}>danger</Button>
        </Card>
  
        <Card title='删除确认弹窗' className='card-wrap'>
          <Button type='primary'
            onClick={this.deleteConfirm}>confirm</Button>
        </Card>
        
        <Modal
          title='王维《鸟鸣涧》'
          visible={this.state.visible1}
          onCancel={() => this.fnCancel('visible1')}
        >
        <p>人闲桂花落，夜静春山空。</p>
        <p>月出惊山鸟，时鸣春涧中</p>
        </Modal>
  
        <Modal
          title='洛阳女儿行'
          visible={this.state.visible2}
          okText='好的'
          cancelText='算了'
          onCancel={() => this.fnCancel('visible2')}
        >
          <p>洛阳女儿对门居，才可颜容十五余</p>
          <p>良人玉勒乘骢马，侍女金盘脍鲤鱼</p>
          <p>城中相识尽繁华，日夜经过赵李家</p>
          <p>谁怜越女颜如玉，贫贱江头自浣纱</p>
        </Modal>
  
        <Modal
          title='王维《鸟鸣涧》'
          visible={this.state.visible3}
          style={{top: 20}}
          onCancel={() => this.fnCancel('visible3')}
        >
          <p>人闲桂花落，夜静春山空。</p>
          <p>月出惊山鸟，时鸣春涧中</p>
        </Modal>
  
        <Modal
          title='王维《鸟鸣涧》'
          visible={this.state.visible4}
          wrapClassName='vertical-center'
          onCancel={() => this.fnCancel('visible4')}
        >
          <p>人闲桂花落，夜静春山空。</p>
          <p>月出惊山鸟，时鸣春涧中</p>
        </Modal>
      </Fragment>
    )
  }
  
  fnOpen = type => this.setState(() => ({ [type]: true }))
  
  fnCancel = type => this.setState(() => ({ [type]: false }))
  
  fnConfirm = type => Modal[type]({
    title: '确认',
    content: '您学会了几首古诗？',
    onOk () {
      console.log('ok')
    },
    onCancel () {
      console.log('cancel')
    }
  })
  
  deleteConfirm = () => confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  })
}

export default Modals
