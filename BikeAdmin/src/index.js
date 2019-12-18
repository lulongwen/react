import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'

import './assets/less/index.less';

// Provider 数据提供器 连接 store，里面所有的组件都能用 store 的数据
import { Provider } from 'react-redux'
import store from './store'
// import * as serviceWorker from './serviceWorker';

const App = (
  <Provider store={store}>
    <Router />
  </Provider>
)
const root = document.getElementById('root')

ReactDOM.render(App, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
