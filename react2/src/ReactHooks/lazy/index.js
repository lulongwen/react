import React, { Component, lazy, Suspense } from 'react'

// const About = lazy(() => import('./about.jsx'))
// 调用 lazy 来封装 About，必须和 Suspense 一起使用
const About = lazy(() => import(/* webpackChunkName: "about" */ './About.js'))


class App extends Component {
  render () {
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About />
        </Suspense>
      </div>
    )
  }
}

export default App
