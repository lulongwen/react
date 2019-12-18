import * as $ from "./actionTypes";
// dispatch({type: '类型', value: '值'})  type 事件类型

// menu
export const actionInitMenu = data => ({
  type: $.INITMENU, data
})

export const actionMenuClick = ({ menuKey, menuName }) => ({
  type: $.MENUCLICK, menuKey, menuName
})

// 退出登录
export const actionLogOut = () => ({
  type: $.LOGINOUT
})

// 点击登录
export const actionLogin = item => ({
  type: $.LOGIN, item
})

