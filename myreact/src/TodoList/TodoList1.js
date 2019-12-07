import React, { Component, Fragment } from 'react'

// Fragment 占位符
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      placeholder: '请输入今天要做的事情',
      list: ['联系英语听力 30分钟', 'Vue源码通读', 'okok']
    }
  }

  render () {
    return (<Fragment>
      <h1>每天要做的事情</h1>
      {/* 函数要 .bind(this) */}
      <div className="todolist">
        <input type="text"
          value={this.state.value}
          placeholder={this.state.placeholder}
          onChange={this.fnChange.bind(this)}/>

        <button onClick={this.fnSubmit}>提交</button>
      </div>
      <ul>
        {this.state.list.map((item, i) => <li
          key={`item${i}`}
          data-key={`item${i}`}
          onClick={this.fnDelete.bind(this, item, i)}>{item}</li>)}
      </ul>
    </Fragment>)
  }

  fnChange (ev) {
    console.log('ev', ev, this)
    this.setState({
      value: ev.target.value
    })
    // 无效：值已改变，但不能渲染到 state，state 不允许做人和修改，用 setState 修改
    // this.state.value = ev.target.value
  }

  // 箭头函数 代替 .bind(this)
  fnChange2 = ev => {
    console.log('event', this, ev)
    this.setState({
      value: ev.target.value
    })
  }

  fnSubmit = () => {
    let { list, value } = this.state
    this.setState({
      value: '',
      list: [...list, value],
    })
  }

  fnDelete (item, i) {
    console.log('delete', item, i)
    let list = this.state.list.filter(key => key !== item)
    this.setState({ list })
  }

}

export default TodoList
