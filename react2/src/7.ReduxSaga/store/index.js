import { createStore, applyMiddleware, compose } from "redux"
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas'
// 创建 sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose

// 使用中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// 使用 reducer 初始化数据
const store = createStore(reducer, enhancer)

// 运行 mySaga 文件
sagaMiddleware.run(mySaga)

export default store
