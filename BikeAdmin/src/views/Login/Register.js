import React, { Component } from 'react'
import {Button, Form, Icon, Checkbox, Input, message, Select, Row, Col } from "antd"
import './login.less'

const { Item }  = Form
const { Option } = Select
class Register extends Component {
  render () {
    const { getFieldDecorator } = this.props.form
  
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    )
    
    return (
      <Form
        className='login'
        onSubmit={this.fnSubmit}>
        
        <Item label="手机号">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号' }],
          })(<Input
            addonBefore={prefixSelector}
            placeholder='请输入手机号'
          />)}
        </Item>
        
        <Item label="验证码">
          <Row gutter={8}>
            <Col span={18}>
              {getFieldDecorator('captcha', {
                rules: [
                  { required: true, message: '请输入验证码' }
                ],
              })(<Input
                prefix={<Icon type='lock'/>}
                placeholder='请输入验证码'/>)}
            </Col>
            <Col span={6}>
              <Button block>获取验证码</Button>
            </Col>
          </Row>
        </Item>
        
        <Item>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              请用户须知 <a href="">网站声明</a>
            </Checkbox>,
          )}
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

export default Form.create({name: '注册页'})(Register)
