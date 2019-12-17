import { CHANGE_VALUE, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

// input 值改变
export const actionChangeValue = value => ({
  type: CHANGE_VALUE, value
})

// 点击提交
export const actionAddItem = () => ({
  type: ADD_ITEM
})

// 点击删除
export const actionDeleteItem = item => ({
  type: DELETE_ITEM, item
})

