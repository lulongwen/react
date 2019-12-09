import { takeEvery, put } from 'redux-saga/effects'
import { GET_LIST } from "./actionTypes"
import * as $ from './actionCreators'
import axios from "axios"
import store from './index'

function* getAjaxList () {
  try {
    const res = yield axios.get('/api/todolist')
    console.log('res', res)
    const action = $.actionAjaxList(res.data.list)
    yield put(action)
  }catch (err) {
    console.log('err', 'todolist.json 请求失败')
  }
}

// const getAjaxList = async (dispatch) => {
//   const data = await axios.get('/api/todolist').catch(err => null)
//   if (!data) return
//
//   const action = $.actionAjaxList(data.data.list)
//   console.log('data', action)
//   put(action) // 无效
// }

// saga 默认导出一个 generator 函数
function* mySaga () {
  yield takeEvery(GET_LIST, getAjaxList)
}

export default mySaga
