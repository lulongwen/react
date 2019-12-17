import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from '../router/login'
import Topic from '../router/topic'
import About from '../router/about'

import Params from './router/params'
import Level from './router/level'
import Error404 from './router/404'
import App from './link'

// this.props 可以获取到外面传递的所有信息
// 2 路由和页面分开，导出组件
class IRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path='/home' render={() =>
              <Level>
                <Route exact path='/home/:id' component={Params} />
              </Level>
            } />
            <Route path='/about' component={About} />
            <Route path='/topic' component={Topic} />
            <Route path='/login' component={Login} />
            <Route component={Error404} />
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}

export default IRouter
