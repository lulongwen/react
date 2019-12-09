import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionChangeValue, actionAddItem, actionDeleteItem } from "./store/actionCreators";

// 优化成 UI 组件，提高组件性能
class TodoList1 extends Component {
  render () {
    const { value, list, changeValue, fnSubmit, deleteItem } = this.props
    return <div style={{margin: '3rem'}}>
      <input type="text"
        value={value}
        onChange={changeValue}/>
      <button onClick={fnSubmit}>提交</button>
      <ul>
        { list.map((item, i) => <li
          key={`item${i}`}
          onClick={() => deleteItem(item)}>{item}</li>) }
      </ul>
    </div>
  }
}

// 无状态组件，UI 组件，没有组件实例
const TodoList = props => {
  const { value, list, changeValue, fnSubmit, deleteItem } = props
  
  return <div style={{margin: '3rem'}}>
    <input type="text"
      value={value}
      onChange={changeValue}/>
    <button onClick={fnSubmit}>提交</button>
    <ul>
      { list.map((item, i) => <li
        key={`item${i}`}
        onClick={() => deleteItem(item)}>{item}</li>) }
    </ul>
  </div>
}


// 把 store 的数据映射到 props 里面，state 指的是 store 的数据
const mapStateToProps = ({value, list}) => ({ value, list })


// 把store 的 dispatch 方法，挂载到 props 上
const mapDispatchToProps = dispatch => ({
  changeValue (ev) {
    const action = actionChangeValue(ev.target.value)
    dispatch(action)
  },
  
  fnSubmit () {
    const action = actionAddItem()
    dispatch(action)
  },
  deleteItem (item) {
    const action = actionDeleteItem(item)
    dispatch(action)
  }
})

// connect 连接 UI 组件，返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
