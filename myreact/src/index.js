import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// React-Redux
import TodoList from './8.ReactRedux/TodoList'
import store from './8.ReactRedux/store'

// Provider 连接 store，里面所有的组件都能用 store 的数据
// Provider 数据提供器
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

// 一定要引入 React，否则无法编译 jsx
ReactDOM.render(App, document.getElementById('root'))
// ReactDOM.render(<TodoList />, document.getElementById('root'))
