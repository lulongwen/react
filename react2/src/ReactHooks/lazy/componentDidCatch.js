import React, { Component, lazy, Suspense } from 'react'

// const About = lazy(() => import('./about.jsx'))
// 调用 lazy 来封装 About，必须和 Suspense 一起使用
const About = lazy(() => import(/* webpackChunkName: "about" */ './About.js'))

// ErrorBoundary  处理异常错误
// componentDidCatch 捕获错误

class App extends Component {
  state = { error: false }
  
  // 代替 componentDidCatch，自动合并 state 参数
  static getDerivedStateFromError () {
    return { error: true }
  }
  
  // componentDidCatch() {
  //   this.setState({ error: true })
  // }
  
  
  render () {
    const { error } = this.state
    if (error) return (<div><mark>组件加载错误</mark></div>)
    
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
