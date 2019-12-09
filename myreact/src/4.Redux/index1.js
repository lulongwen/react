import React, { Component } from 'react'
import { Input, Button, List, Typography } from 'antd'

// 常量统一管理 action.type
import * as $ from './store/actionTypes'

import 'antd/dist/antd.min.css'
import './list.css'

// 引入 reducer store
import store from './store'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    
    this.fnChange = this.fnChange.bind(this)
    this.fnSubmit = this.fnSubmit.bind(this)
    this.storeChange = this.storeChange.bind(this)
    
    store.subscribe(this.storeChange)
    console.log('reducer', this.state)
  }
  
  storeChange () {
    this.setState(store.getState())
  }
  
  render () {
    return <div className='inputbar-wrap'>
      <div className="inputbar">
        <Input
          placeholder="请输入内容"
          value={this.state.value}
          onChange={this.fnChange}/>
        <Button
          type="primary"
          onClick={this.fnSubmit}>提交</Button>
      </div>
  
      <List
        bordered
        dataSource={this.state.list}
        style={{marginBottom: '1rem'}}
        renderItem={item => (
          <List.Item onClick={this.fnDeleteItem.bind(this, item)}>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  }
  
  fnChange (ev) {
    const action = {
      type: $.CHANGE_VALUE,
      value: ev.target.value
    }
    store.dispatch(action)
  }
  
  fnSubmit () {
    store.dispatch({ type: $.CHANGE_LIST })
  }
  
  fnDeleteItem (item) {
    store.dispatch({
      type: $.DELETE_ITEM, item
    })
  }
}

export default App
