import React, { Component, Fragment } from 'react'
import { Card, Carousel } from 'antd'

class Carousels extends Component {
  render () {
    return (
      <Fragment>
        <Card title='文字背景轮播' className='card-wrap'>
          <Carousel autoplay>
            <div><h3>Ant Motion Banner - React</h3></div>
            <div><h3>Ant Motion Banner - Vue</h3></div>
            <div><h3>Ant Motion Banner - Angular</h3></div>
          </Carousel>
        </Card>
        
        <Card title='图片轮播' className='card-wrap slider-wrap'>
          <Carousel autoplay effect="fade">
            <div><img src="/assets/carousel/carousel-1.jpg" alt=""/></div>
            <div><img src="/assets/carousel/carousel-2.jpg" alt=""/></div>
            <div><img src="/assets/carousel/carousel-3.jpg" alt=""/></div>
          </Carousel>
        </Card>
      </Fragment>
    )
  }
}

export default Carousels
