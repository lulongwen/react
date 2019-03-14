import { fromJS } from 'immutable';

// import * as Types from './actionTypes';
import { Types } from './index';


// const defaultState = { focus: false }; 把一个JS对象 转化为 immutable.js 对象
const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

// reducer 默认导出的是一个 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.INPUT_FOCUS:
      return state.set('focus', true);
    case Types.INPUT_BLUR:
      return state.set('focus', false);
  
    case Types.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case Types.MOUSE_LEAVE:
      return state.set('mouseIn', false);
      
    case Types.CLICK_SWITCH:
      return state.set('page', action.page);
  
    case Types.SEARCH_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
  
    default:
      return state;
  }
  
  
  // if( action.type === 'inputFocus' ) { 优化后，持续优化到 index.js
  // if( action.type === Types.INPUT_FOCUS ) {
  //   // return { focus: true } 报错，要用 immutable 对象的方法
  //   // immutable 对象的 set 方法，会结合之前 immutable对象的值，和设置的值，返回一个全新的对象
  //   // 并没有改变原始 state 的值
  //   return state.set('focus', true);
  // }
  //
  // if( action.type === Types.INPUT_BLUR ) {
  //   return state.set('focus', false);
  // }
  //
  // if(action.type === Types.SEARCH_LIST) {
  //   return state.set('list', action.data);
  // }
  // return state;
}




















