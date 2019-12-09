// 引入常量
import { CHANGE_VALUE, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const State = {
  value: '123',
  list: ['123', '456']
}

export default (state = State, action) => {
  const { type } = action
  
  if (type === CHANGE_VALUE) {
    return Object.assign({}, state, {value: action.value })
  }
  // 添加
  else if (type === ADD_ITEM) {
    const { value, list } = state
    return Object.assign({}, state, {
      value: '', list: [value, ...list]
    })
  }
  // 删除
  else if (type === DELETE_ITEM) {
    const list = state.list.filter(item => item !== action.item)
    return Object.assign({}, state, { list })
  }
  
  return state
}
