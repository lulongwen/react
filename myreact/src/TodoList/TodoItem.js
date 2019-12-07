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

  render () {
    const { item } = this.props
    return <li onClick={this.fnClick}>{item}</li>
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
