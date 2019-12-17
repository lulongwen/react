import React, { Component } from 'react'

// 引入 antd 组件和样式，渲染 UI组件
import {Button, Input, List, Typography} from "antd"
import 'antd/dist/antd.min.css'
import './list.css'

// 无状态组件，性能好，就是一个函数
// 当一个函数只有一个 render 函数的时候，就用无状态组件替换 UI 组件
const TodoListUI = props => {
  const { value, list, fnChange, fnSubmit, fnDeleteItem } = props
  
  return <div className='inputbar-wrap'>
    <div className="inputbar">
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={fnChange}
      />
      <Button type="primary" onClick={fnSubmit}>提交</Button>
    </div>
    
    <List
      bordered
      style={{marginBottom: '1rem'}}
      dataSource={list}
      renderItem={item => (
        <List.Item onClick={ () => fnDeleteItem(item)}>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  </div>
}

export default TodoListUI

/*
UI 组件，是一个类，有生命周期函数
class TodoListUI extends Component {
  render () {
    const { value, list, fnChange, fnSubmit, fnDeleteItem } = this.props

    return <div className='inputbar-wrap'>
      <div className="inputbar">
        <Input
          placeholder="请输入内容"
          value={value}
          onChange={fnChange}/>
        <Button
          type="primary"
          onClick={fnSubmit}>提交</Button>
      </div>
      
      <List
        bordered
        dataSource={list}
        style={{marginBottom: '1rem'}}
        renderItem={item => (
          // 箭头函数指向父级，并传值
          <List.Item onClick={ () => fnDeleteItem(item)}>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  }
}
export default TodoListUI
*/
