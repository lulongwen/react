import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Login from './router/login'
import Contact from './router/contact'
import Topic from './router/topic'
import About from './router/about'

import Home from './router/home'
import Level from './router/level'

import App from './index2'

// 2 路由和页面分开，导出组件
class IRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <App>
          {/*<Route exact={true} path='/' component={Home} />*/}
          {/* render 箭头函数返回一个组件，没有 render 只是执行代码 */}
          <Route path='/home' render={() =>
            <Level>
              <Route exact path='/home/a' component={Home} />
            </Level>
          } />
          <Route path='/about' component={About} />
          <Route path='/topic' component={Topic} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
        </App>
      </BrowserRouter>
    )
  }
}

export default IRouter
