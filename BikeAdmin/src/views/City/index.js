import React, { Component } from 'react'
import { Card, Form, Table, Select, Button } from 'antd'
import { thead } from './cityData'

const { Item } = Form
const { Option } = Select

class SearchForm extends Component {
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout='inline'>
        <Item label='城市'>
          {
            getFieldDecorator('city_id')(
              <Select placeholder='请选择城市' style={{ width: 120 }}>
                <Option value=''>全部</Option>
                <Option value='1'>上海</Option>
                <Option value='2'>深圳</Option>
                <Option value='3'>台北</Option>
              </Select>
            )
          }
        </Item>
        <Item label='用车模式'>
          {
            getFieldDecorator('city_id')(
              <Select placeholder='请选择' style={{ width: 120 }}>
                <Option value=''>全部</Option>
                <Option value='1'>指定停车点模式</Option>
                <Option value='2'>禁停区模式</Option>
              </Select>
            )
          }
        </Item>
        <Item label='营运模式'>
          {
            getFieldDecorator('mode')(
              <Select placeholder='请选择' style={{ width: 120 }}>
                <Option value=''>全部</Option>
                <Option value='1'>自营</Option>
                <Option value='2'>加盟</Option>
              </Select>
            )
          }
        </Item>
        <Item label='加盟商状态'>
          {
            getFieldDecorator('league')(
              <Select placeholder='请选择' style={{ width: 120 }}>
                <Option value=''>全部</Option>
                <Option value='1'>已授权</Option>
                <Option value='2'>未授权</Option>
              </Select>
            )
          }
        </Item>
        <Item>
          <Button.Group>
            <Button type='primary'>搜索</Button>
            <Button type='danger'>重置</Button>
          </Button.Group>
        </Item>
      </Form>
    )
  }
}

SearchForm = Form.create({name: '城市搜索'})(SearchForm)

class City extends Component {
  render () {
    return (
      <Card title='城市管理'>
        <SearchForm />
        
        <div className="table-wrap" style={{margin: '20px 0 10px 0', textAlign: 'right'}}>
          <Button type='primary'>开通城市</Button>
        </div>
        <Table
          bordered
          columns={thead}
          dataSource={[]}
          pagination={false}
        />
      </Card>
    )
  }
}

export default City
