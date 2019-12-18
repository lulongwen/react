import React, { Component } from 'react'
import { Form, Input, Button, message, Icon, Checkbox } from 'antd'

const { FormItem } = Form

class SearchMore extends Component {
  state = { visible: false }
  
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form
        layout='horizontal'
        style={{width: 500}}
        onSubmit={this.fnSubmit}>
        <FormItem>
          {
            getFieldDecorator('username', {
              initicalValue: '你累',
              rules: [
                { required: true, message: '用户名不能为空'},
                { min: 5, max: 10, message: '长度不在范围内' },
                { pattern: new RegExp('^\\w+S', 'g'), message: '用户名必须是字母或数字'}
              ]
            })(<Input prefix={<Icon type='user'/>} placeholder='请输入用户名'/>)
          }
        </FormItem>
      </Form>
    )
  }
  
  fnSubmit = () => {
  
  }
}

export default SearchMore
