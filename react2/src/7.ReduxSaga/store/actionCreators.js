import * as $ from './actionTypes'

export const actionChangeValue = value => ({
  type: $.CHANGE_VALUE, value
})

export const actionChangeList = () => ({
  type: $.CHANGE_LIST
})

export const actionDeleteItem = item => ({
  type: $.DELETE_ITEM, item
})

// componentWilMount action
export const actionGetList = () => ({
  type: $.GET_LIST
})

// redux-saga ajax 请求在单独的 saga 文件里
export const actionAjaxList = data => ({
  type: $.AJAX_LIST, data
})
