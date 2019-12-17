import { createStore, applyMiddleware, compose } from "redux"
import reducer from './reducer'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))

const store = createStore(
  reducer, // 使用 reducer 初始化数据
  enhancer
)

export default store
