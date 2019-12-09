import * as $ from './actionTypes'

// input value 值改变
export const actionChangeValue = value => ({
  type: $.CHANGE_VALUE, value
})

// 点击提交 list列表改变
export const actionChangeList = () => ({
  type: $.CHANGE_LIST
})

// 点击删除
export const actionDeleteItem = item => ({
  type: $.DELETE_ITEM, item
})

// ajax 获取数据后修改 list
export const actionGetList = data => ({
  type: $.GET_LIST, data
})
