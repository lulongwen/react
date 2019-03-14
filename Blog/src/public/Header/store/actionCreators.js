import axios from 'axios';
import { fromJS } from 'immutable';

import { Types } from './index';

// 不导出的方法放在最上面，内部用的
const searchList = (data)=> ({
  type: Types.SEARCH_LIST,
  data: fromJS(data), // 转化为 immutable 对象
  totalPage: Math.ceil(data.length/10)
});


// ({ }) 直接返回一个对象
export const inputFocus = ()=> ({
  // type: 'search_focus', 优化后
  type: Types.INPUT_FOCUS
});

export const inputBlur = ()=> ({
  type: Types.INPUT_BLUR
});

export const mouseEnter = ()=> ({
  type: Types.MOUSE_ENTER
});

export const mouseLeave = ()=> ({
  type: Types.MOUSE_LEAVE
});

export const clickSwitch = (page)=> ({
  type: Types.CLICK_SWITCH,
  page
})

export const getList = ()=> {
  return (dispatch)=> {
    axios.get('/api/headerList.json')
      .then(res=> {
        // 派发一个 action 传递给 reducers.js
        const action = searchList(res.data.data);
        dispatch(action);
      })
  }
}