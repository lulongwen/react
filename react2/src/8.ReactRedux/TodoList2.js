import React, { Component } from 'react'
import { connect } from 'react-redux'

// 优化成 UI 组件，提高组件性能
class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  // }
  
  render () {
    return <div style={{margin: '3rem'}}>
      <input type="text"
        value={this.props.value}
        onChange={this.changeValue.bind(this)}/>
      <button>提交</button>
      <ul>
        <li>react</li>
      </ul>
    </div>
  }
  
  changeValue (ev) {
    console.log('ev', ev.target.value)
  }
}

// 把 store 的数据映射到 props 里面
// state 指的是 store 的数据
const mapStateToProps = ({value}) => ({
  value
  // value: state.value
})

// 把store 的 dispatch 方法，挂载到 props 上
const mapDispatchToProps = dispatch => ({
  changeValue () {
    const action = {
      type: 'change_value',
      value: ev.target.value
    }
    dispatch(action)
  },
  
  fnClick () {
    const action = { type: 'add_item' }
    dispatch(action)
  }
})

// connect 连接 UI 组件，返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
