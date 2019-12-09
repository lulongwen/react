import React, { Component } from 'react'
import { Input, Button, List, Typography } from 'antd'

// actionCreates 统一管理 reducer 的 action， 提高代码的可维护性
import * as $ from './store/actionCreators'

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
    const action = $.actionChangeValue(ev.target.value)
    store.dispatch(action)
  }
  
  fnSubmit () {
    const action = $.actionChangeList()
    store.dispatch(action)
  }
  
  fnDeleteItem (item) {
    const action = $.actionDeleteItem(item)
    store.dispatch(action)
  }
}

export default App
