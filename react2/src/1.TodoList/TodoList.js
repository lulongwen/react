import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

// 先引入组件，后引入样式

// Fragment 占位符
class TodoList extends Component {
  constructor (props) {
    super(props)
    // 当组件的 state 或 props 发生改变时，render函数就会重新渲染
    this.state = {
      value: '',
      placeholder: '请输入今天要做的事情',
      list: ['联系英语听力 30分钟', 'Vue源码通读', 'okok']
    }
    
    // ref 直接操作 DOM，实际开发中，不建议使用
    
    // this的指向统一放在 constructor里，提高性能
    this.fnChange = this.fnChange.bind(this)
    this.fnDelete = this.fnDelete.bind(this)
  }

  render () {
    return (<Fragment>
      <h1>每天要做的事情</h1>
      {/* 函数要 .bind(this) */}
      <div className="todolist">
        <input type="text"
          value={this.state.value}
          placeholder={this.state.placeholder}
          onChange={this.fnChange}
          ref={input => this.input = input }/>

        <button onClick={this.fnSubmit}>提交</button>
      </div>
      <ul ref={ul => this.ul = ul}> {this.initItem(this.state.list)} </ul>
    </Fragment>)
  }
  
  initItem (data=[]) {
    // 传递属性
    return data.map((item, i) => <TodoItem
      key={`item${i}`}
      item={item}
      deleteItem={this.fnDelete}/>)
  }

  fnChange (ev) {
    console.log('ev', ev, this)
    const value = ev.target.value
    // setState 最新版返回一个异步函数，提升性能，值要在外面保存
    this.setState(ev => ({ value }))
    
    // this.setState({ value: ev.target.value })
    // 无效：值已改变，但不能渲染到 state，state 不允许做人和修改，用 setState 修改
    // this.state.value = ev.target.value
  }

  // 箭头函数 代替 .bind(this)
  fnChange2 = ev => {
    // ref={ input => this.input = input}
    // value: this.input.value
    console.log('event', this, ev)
    this.setState({
      value: ev.target.value
    })
  }

  fnSubmit = () => {
    // setState异步执行，默认参数是：修改前的 state
    this.setState(({list, value}) => ({
      value: '',
      list: [...list, value]
    }), () => { // setState 回调函数
      // 页面数据更新后，再去获取 DOM
      console.log('after', this.ul.querySelectorAll('li').length)
    })
    
    // ref 直接获取 DOM 元素，动画要用到 ref，获取的数据比实际少 1 个
    // console.log('after', this.ul.querySelectorAll('li').length)
  }

  fnDelete (item) {
    console.log('delete', item)
    this.setState(({list}) => {
      return {list: list.filter(key => key !== item)}
    })
  }
}

export default TodoList
