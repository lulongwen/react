import React, { Component, Fragment } from 'react'
import {Card, Table, Modal, Button, message } from 'antd'
import axios from 'axios'

import { thead, tbody } from './data'


class Tables extends Component {
  state = {
    tbody,
    radioSelect: {}
  }
  UNSAFE_componentWillMount () {
    // this.getData()
  }
  
  // 动态获取表格数据
  getData = () => {
    const url = 'https://www.fastmock.site/mock/b113e80c768ad8d64759ae7d07109f6a/'
    axios.get(`${url}api/table/list`)
      .then(res => {
        const { status, data: {result} } = res
        if (status !== 200) return
        
        console.log('status', status, result)
        this.setState(() => ({
          tbody: result.list
        }))
      })
  }
  
  render () {
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys: ['Mary'],
      onChange (selectedRowKeys, selectedRows) {
        console.log(selectedRowKeys, selectedRows)
      }
    }
    
    return (
      <Fragment>
        <Card title='基础表格' style={{marginBottom: 20}}>
          <header style={{textAlign: 'right', marginBottom: '20px'}}>
            <Button type='danger' onClick={this.fnDelete}>删除</Button>
          </header>
          <Table
            bordered
            rowKey='username'
            columns={thead}
            dataSource={this.state.tbody}
            pagination={false}
            rowSelection={{
              type: 'radio',
              onSelect: (radioSelect) => {
                this.setState(() => ({ radioSelect }))
                console.log('item', radioSelect)
              }
            }}
          />
        </Card>
  
        <Card title='Ajax加载表格数据' style={{marginBottom: 20}}>
          <Table
            bordered
            rowKey='username'
            columns={thead}
            dataSource={this.state.tbody}
            pagination={false}
            rowSelection={rowCheckSelection}
            onRow={(record, index) => ({
              // 点击行
              onClick: () => {
                this.onRowClick({record, index})
              }
            })}
          />
        </Card>
      </Fragment>
    )
  }
  
  onRowClick = ({record, index}) => {
    Modal.info({
      title: '选中信息',
      content: `用户名：${record.username}, 爱好：${record.interest}`
    })
  }
  
  fnDelete = () => {
    let row = this.state.radioSelect
    if (!Object.keys(row).length) return message.warn('请选择要删除的数据')
    
    Modal.confirm({
      title: '删除提示',
      content: `您确定删除 ${row.username}`,
      onOk: () => {
        const tbody = this.state.tbody.filter(item => item.id !== row.id)
        message.success('删除成功')
        console.log(tbody)
        this.setState(() => ({ tbody }))
      }
    })
    console.log('row', row)
  }
}

export default Tables
