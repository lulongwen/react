// 引入常量
import * as $ from './actionTypes'

const State = {
  menu: [],
  menuName: '首页',
  menuKey: '/home',
  defaultKey: '/home',
  
  user: {
    name: '一览众山小'
  },
  
  list: ['123', '456']
}

export default (state= State, action) => {
  const { type } = action
  
  switch (type) {
    case $.MENUCLICK:
    {
      const { menuKey, menuName } = action
      return {...state, menuKey, menuName }
    }
    
    case $.CHANGE_VALUE:
      // 展开对象，后面的值 覆盖前面
      return {...state, value: action.value }
    
    case $.ADD_ITEM:
    {
      const { value, list } = state
      return Object.assign({}, state, {
        value: '', list: [value, ...list]
      })
    }
    
    case $.DELETE_ITEM:
      const list = state.list.filter(item => item !== action.item)
      return Object.assign({}, state, { list })
    
    default:
      return state
  }
}
