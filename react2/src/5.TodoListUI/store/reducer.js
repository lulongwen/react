import * as $ from './actionTypes'

const State = {
  value: '123',
  list: ['ok', 'yes', 'good', 'fest']
}

// state 上一次的数据，只读，不能修改
// action 组件 dispatch 传递的（用户传递的一句话，我要借书）
// reducer 只接收 state，但绝对不能修改 state，是个纯函数，不能有异步的操作，不能有时间相关的操作
// 纯函数指的是：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用，state 是个纯函数
export default (state = State, action) => {
  const { type, value='' } = action
  
  console.log(state, action)
  if (type === $.CHANGE_VALUE) {
    return Object.assign({}, state, { value })
  }
  else if (type === $.CHANGE_LIST) {
    const {value, list} = state
    return Object.assign({}, state, {
      list: [value, ...list], value: ''
    })
  }
  else if (type === $.DELETE_ITEM) {
    const list = state.list.filter(item => item !== action.item)
    return Object.assign({}, state, { list })
  }

  // ajax 异步 修改 reducer
  else if (type === $.GET_LIST) {
    return Object.assign({}, state, { list: action.data })
  }
  
  return state
}
