import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
// import App from './App/App.js';
// import TodoList from './TodoList/TodoList'

// 生命周期函数
// import TodoList from './LifeCycle/TodoList'

// 动画效果
// import App from './Transition/css'
// import App from './Transition/GroupTransition'

// App
// import App from './5.TodoListUI'
// import App from './6.ReduxThunk'
import App from './7.ReduxSaga'

// PWA progressvie web application
// import * as serviceWorker from './serviceWorker';

// jsx 语法 <App /> 一定要引入 React，否则无法编译 jsx
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
