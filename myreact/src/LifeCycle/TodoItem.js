import React, { Component } from 'react'
// 数据验证
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    // 当父组件的 render 函数执行时，子组件的 render 函数会自动执行渲染
    // 接收的 props 发生变化，子组件 render 函数也会重新渲染
    this.fnClick = this.fnClick.bind(this)
  }
  
  // 组件被更新之前，会自动被执行
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return (nextProps.item !== this.props.item) ? true : false
  }

  render () {
    console.log('child render')
    const { item } = this.props
    return <li onClick={this.fnClick}>{item}</li>
  }
  
  // 一个组件要从父组件接收 props 参数，父组件 render 函数被重新执行，这个函数才会被调用
  // 如果这个组件，第一次存在于父组件中，不会被调用，第一次 render不调用
  // 如果这个组件，之前已经存在在父组件中，才会执行
  componentWillReceiveProps () {
    console.log('child componentWillReceiveProps')
  }
  
  // 当这个组件即将从页面删除的时候，会被调用
  componentWillUnmount () {
    console.log('child componentWillUnmount')
  }

  fnClick () {
    // 调用父级方法，传递数据 给父级的方法
    const { item, deleteItem } = this.props
    deleteItem(item)
  }
}

// 数据类型校验
TodoItem.propTypes = {
  // 必填项
  test: PropTypes.string.isRequired,
  // 多个类型
  // item: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func
}

// 默认值
TodoItem.defaultProps = {
  test: 'react'
}

export default TodoItem
