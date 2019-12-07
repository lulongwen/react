import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App/index';
import TodoList from './TodoList'
// PWA progressvie web application
// import * as serviceWorker from './serviceWorker';

// jsx 语法 <App /> 一定要引入 React，否则无法编译 jsx
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
