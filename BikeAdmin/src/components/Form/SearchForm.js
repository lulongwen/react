import React, { Component } from 'react'
import { Form, Input, Select, Checkbox, DatePIcker, Button } from 'antd'

const { Item } = Form
const { Option } = Select

const initOption = data => {
  if (!Array.isArray(data) || !data.length) return data
  
  return data.map(item => <Option value={item.id} key={item.id}>{item.name}</Option>)
}

const data = [
  {
    type: 'Select',
    label: '选择城市',
    labelWidth: '100',
    field: 'city',
    initialValue: '',
    children: [
      { name: 'lucy', id: 1 }
    ],
    rules: []
  }
]

class SearchForm extends Component {
  initForm = () => {
    const { getFieldDecorator } = this.props.form
    const data = this.props.data
    const FormItem = []
    
    // 如果不是数组，直接返回
    if (!Array.isArray(data) || !data.length) return data
    
    data.forEach((item, i) => {
      let { type='input', label, labelWidth='90px', field,
        initialValue='', placeholder='', htmlType='text',
        children= [], } = item
      console.log('type', field)
      
      switch(type.toLocaleLowerCase()) {
        case 'select':
          const SELECT = (
            <Item label={label} key={field}>
              {
                getFieldDecorator([field], {
                  initialValue
                })(
                  <Select
                    type='text'
                    placeholder={placeholder}
                    style={{width: labelWidth}}
                  >
                    { initOption(children) }
                  </Select>
                )
              }
            </Item>
          )
          FormItem.push(SELECT)
          break;
          
        default:
          const INPUT = (
            <Item label={label} key={field}>
              {
                getFieldDecorator(field, {
                  initialValue
                })(
                  <Input
                    type={htmlType}
                    placeholder={placeholder}
                    style={{width: labelWidth}}
                  />
                )
              }
            </Item>
          )
          console.log(123123, INPUT)
          FormItem.push(INPUT)
      }
    })
  
    return FormItem
  }
  
  render () {
    return (
      <Form layout='inline'>
        { this.initForm() }
        <Button.Group>
          <Button type='primary' onClick={this.fnSearch}>搜索</Button>
          <Button type='danger' onClick={this.fnCancel}>取消</Button>
        </Button.Group>
      </Form>
    )
  }
  
  fnSearch = () => {
    console.log('fnsearch')
  }
  
  fnCancel = () => {
    console.log('cancel')
  }
}

export default Form.create({})(SearchForm)
