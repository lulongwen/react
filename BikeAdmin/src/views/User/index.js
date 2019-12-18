import React, { Component, Fragment } from 'react'
import {
  Card, Button, Form, Input, Select, Radio, Icon, Modal, DatePicker
} from 'antd'

const { Item } = Form
const { Group } = Radio
const { TextArea } = Input
const { Option } = Select

class User extends Component {
  state = {
    list: [],
    visible: false
  }
  
  render () {
    return (
      <Fragment>
        <Card title='员工列表'>
          {/* 表单搜索 */}
          <Button.Group style={{float: 'right'}}>
            <Button type='primary' icon='plus'>创建</Button>
            <Button type='primary' icon='edit'>编辑</Button>
            <Button type='danger' icon='delete'>删除</Button>
          </Button.Group>
          
        </Card>
      </Fragment>
    )
  }
}

export default User
