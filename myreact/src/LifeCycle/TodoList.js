import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {
  constructor (props) {
    super(props)
    // 当组件的 state 或 props 发生改变时，render函数就会重新渲染
    this.state = {
      value: '',
      placeholder: '请输入今天要做的事情',
      list: []
    }
    // this的指向统一放在 constructor里，提高性能
    this.fnChange = this.fnChange.bind(this)
    this.fnDelete = this.fnDelete.bind(this)
  }
  
  // 在组件即将被挂载到页面的时候自动执行
  componentWillMount () {
    // SSR 中有问题
    console.log('componentWillMount')
  }
  
  // 组件被挂载到页面之后，会自动被执行
  // ajax 都放在这里执行，不推荐放到 componentWillMount
  // ajax 不能放在 render函数里，因为render 函数会反复执行，componentDidMount 只执行一次
  componentDidMount () {
    axios.get('/api/todolist').then(({data}) => {
      const list = [...data.list]
      this.setState(() => ({ list }))
      
    }).catch(err => console.log('err', err))
    console.log('componentDidMount')
  }

  render () {
    console.log('parent render')
    return (<Fragment>
      <h1>每天要做的事情</h1>
      <div className="todolist">
        <label htmlFor="todo">请输入要做的事情</label>
        <input type="text" id="todo"
          value={this.state.value}
          placeholder={this.state.placeholder}
          onChange={this.fnChange} />

        <button onClick={this.fnSubmit}>提交</button>
      </div>
      <ul ref={ul => this.ul = ul}> {this.initItem(this.state.list)} </ul>
    </Fragment>)
  }
  
  // 组件被更新之前，会自动被执行
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }
  
  // 组件被更新之前，会自动被执行，但是在 shouldComponentUpdate 之后
  // 如果 shouldComponentUpdate 返回true 才执行
  // 如果返回 false，这个函数就不会执行
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  
  // 组件更新完成之后，会自动被执行
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  
  initItem (data=[]) {
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
