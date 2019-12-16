import React, { Component } from 'react'
import { Card, Row, Col, Modal } from 'antd'
import './ui.less'

const imgs = [
  ['1.png','2.png','3.png','4.png','5.png', '21.png', '25.png'],
  ['6.png','7.png','8.png','9.png','10.png', '22.png'],
  ['11.png','12.png','13.png','14.png','15.png', '23.png'],
  ['16.png','17.png','18.png','19.png','20.png', '24.png']
]

const cols = list => list.map((item, i) => <Col md={6} key={`col_${i}`}>{item}</Col>)

class Gallery extends Component {
  state = { visible: false }
  
  render () {
    const imgList = imgs.map(list => list.map(item => {
      let img = <img
        key={`gallery_${item}`}
        src={`/assets/gallery/${item}`}
        onClick={() => this.fnOpen(item)} />
    
      return (
        <Card
          key={`gallery_${item}`}
          style={{marginBottom: 20}}
          cover={ img }>
          <Card.Meta
            title='图片画廊'
            description='动态计算数组生成 Gallery'/>
        </Card>
      )
    }))

    return (
      <div className='card-wrap'>
        <Row gutter={20}>
          { cols(imgList) }
        </Row>
        
        <Modal
          width={700}
          height={600}
          title='Gallery 图库'
          footer={null}
          maskClosable={false}
          visible={this.state.visible}
          onCancel={this.fnCancel}>
          <img src={this.state.url} style={{width: '100%'}}/>
        </Modal>
      </div>
    )
  }
  
  fnOpen = src => {
    this.setState(() => ({
      visible: true,
      url: `/assets/gallery/${src}`
    }))
  }
  
  fnCancel = () => this.setState(() => ({visible: false}))
}

export default Gallery
