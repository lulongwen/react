import React, { Component } from 'react'
import { Form, Input, Button, message, Icon, Checkbox } from 'antd'
import './login.less'

const { Item } = Form

class Login extends Component {
  render () {
    const { getFieldDecorator } = this.props.form
    
    return (
      <Form
        className='login'
        onSubmit={this.fnSubmit}>
        
        <Item>
          {
            getFieldDecorator('username', {
              initialValue: 'lucy',
              rules: [
                { required: true, message:'用户名不能为空' },
                { min:5, max:10, message: '长度不在范围内' },
                { pattern: new RegExp('^\\w+$','g'),
                  message: '用户名必须为字母或数字'
                }
              ]
            })(<Input
              prefix={<Icon type="user"/>}
              placeholder="请输入用户名"/>)
          }
        </Item>
  
        <Item>
          {
            getFieldDecorator('password', {
              initialValue: '123456',
              rules: [
                { required: true, message:'密码不能为空' },
                { min:6, max:8, message: '长度不在范围内' }
              ]
            })(<Input
              type="password"
              prefix={<Icon type="lock"/>}
              placeholder="请输入密码"/>)
          }
        </Item>
  
        <Item>
          <Input placeholder='请输入验证码'/>
        </Item>
        
        <Item>
          {
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })( <Checkbox>记住密码</Checkbox> )
          }
          <a href="#" style={{float:'right'}}>忘记密码</a>
        </Item>

        <Item>
          <Button block type='primary' htmlType='submit'>登录</Button>
        </Item>
      </Form>
    )
  }
  
  fnSubmit = ev => {
    ev.preventDefault()
    this.props.form.validateFields((err, data) => {
      console.log('err', err, data)
      if (err) return message.error('数据填写错误')
    })
  }
  
}

export default Form.create({name: '登录页'})(Login)

