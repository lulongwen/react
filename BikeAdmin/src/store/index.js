// createStore 创建 store
import { createStore } from 'redux'
import reducer from './reducer'

// 创建数据，然后在入口文件 /index.js 引用
const store = createStore(reducer)

export default store
