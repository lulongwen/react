// 合并 reducer.js, 把 state 变成 immutable 对象
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

// 目录优化到 index.js export
import { reducer as HeaderReducer } from '../public/Header/store';
import { reducer as HomeReducer } from '../pages/Home/store';
import { reducer as DetailReducer } from '../pages/Detail/store';
import { reducer as LoginReducer } from '../pages/Login/store';

// 合并时，取数据，要用别名，key值，比如 header
const reducers = combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer,
  login: LoginReducer
});

export default reducers;










