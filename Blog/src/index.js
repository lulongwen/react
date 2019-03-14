import React from 'react';
import ReactDOM from 'react-dom';

// 一个文件引入，全局都生效，用 styled-components
import './index/index.css';
import './index/style.js';

import './static/css/simple-line-icons.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
