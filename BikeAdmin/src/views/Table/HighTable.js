import React, { Component } from 'react'
import {Table,  Card } from 'antd'

import { thead, tbody } from './data/hightable'

class HighTables extends Component {
  render () {
    return (
      <Card title='基础表格'>
        <Table
          bordered
          columns={thead}
          dataSource={tbody}
          pagination={false}
        />
      </Card>
    )
  }
}

export default HighTables
