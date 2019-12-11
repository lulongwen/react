import React, { Fragment } from 'react'

// 默认加载一切组件，比如登录页，详情页，首页
function App() {
  return (
    <Fragment>
      { this.props.children }
    </Fragment>
  );
}

export default App
