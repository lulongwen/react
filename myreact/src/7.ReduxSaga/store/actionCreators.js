import * as $ from './actionTypes'
import axios from "axios";
import store from "./index";

export const actionChangeValue = value => ({
  type: $.CHANGE_VALUE, value
})

export const actionChangeList = () => ({
  type: $.CHANGE_LIST
})

export const actionDeleteItem = item => ({
  type: $.DELETE_ITEM, item
})

// ajax 获取数据后修改 list
export const actionGetList = data => ({
  type: $.GET_LIST, data
})

// ajax 请求数据，redux-thunk，action 返回一个函数
export const getList = () => dispath => {
  axios.get('/api/todolist').then(res => {
    const action = actionGetList(res.data.list)
    dispatch(action)
  })
}
