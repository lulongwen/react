import React, { Component } from 'react'
import { Card } from 'antd'
import SearchForm from 'components/Form/SearchForm'

import { searchData } from './orderData'

class Order extends Component {
  render () {
    return (
      <Card title='订单列表'>
        <SearchForm data={searchData}/>
      </Card>
    )
  }
}

export default Order
