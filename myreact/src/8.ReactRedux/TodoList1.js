import React, { Component } from 'react'
import store from './store'

// 优化成 UI 组件，提高组件性能
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeValue = this.changeValue.bind(this)
  }
  
  render () {
    return <div style={{margin: '3rem'}}>
      <input type="text"
        value={this.state.value}
        onChange={this.changeValue}/>
      <button>提交</button>
      <ul>
        <li>react</li>
        { this.state.list.map((item, i) => <li key={`item${i}`}>{item}</li>) }
      </ul>
    </div>
  }
  
  changeValue (ev) {
    console.log('ev', ev.target.value)
  }
}

export default TodoList
