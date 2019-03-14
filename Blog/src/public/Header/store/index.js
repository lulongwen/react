import reducer from './reducer';

import * as Types from './actionTypes';
import * as Creators from './actionCreators';

// 把 store下的所有文件的出口，统一暴露在 index.js 下面，在其他页面只需要 导入 index.js就行了
export { reducer, Types, Creators };