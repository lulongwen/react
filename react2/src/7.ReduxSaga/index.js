import React, { Component } from 'react'

// 引入 TodoListUI UI组件，index.js 是容器组件
import TodoListUI from "./TodoListUI"

// actionCreates 统一管理 reducer 的 action， 提高代码的可维护性
import * as $ from './store/actionCreators'

// 引入 reducer store
import store from './store'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    
    this.fnChange = this.fnChange.bind(this)
    this.fnSubmit = this.fnSubmit.bind(this)
    this.fnDeleteItem = this.fnDeleteItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    
    store.subscribe(this.storeChange)
  }
  
  storeChange () {
    this.setState(store.getState())
  }
  
  render () {
    const { value, list} = this.state
    // 渲染 UI组件，数据通过属性传递
    return <TodoListUI
      value={value}
      list={list}
      fnChange={this.fnChange}
      fnSubmit={this.fnSubmit}
      fnDeleteItem={this.fnDeleteItem}
    />
  }
  
  // 页面渲染完成后，异步操作的代码，从组件中移除，移到 action
  componentDidMount () {
    // store.dispatch sagas.js 会捕获到，实际调用的是 yield takeEvery(GET_LIST, getAjaxList)
    const action = $.actionGetList()
    store.dispatch(action)
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
