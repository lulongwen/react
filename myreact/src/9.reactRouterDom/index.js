import React, { Component } from 'react'
import { HashRouter, BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Login from './router/login'
import Contact from './router/contact'
import Topic from './router/topic'
import About from './router/about'
import Home from './router/home'

/*
HashRouter #/  里面只能有一个子节点
BrowserRouter /
  Switch 只有一个路由有效，匹配一个后，后面就不在匹配，点击其他也无效
* */

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='hash-router'>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/about'>关于我</Link></li>
            <li><Link to='/topic'>知识点</Link></li>
            <li><Link to='/contact'>联系方式</Link></li>
            <li><Link to='/login'>登录页</Link></li>
          </ul>
        
          <hr/>
          {/* exact={true} 精确匹配
            /about 不加 exact，匹配到 /, /about */}
          
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/about/topic' component={Topic} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          
          {/*
          <Switch>
            <Route path='/' component={Home} />
            <Route exact={true} path='/about' component={About} />
            <Route path='/topic' component={Topic} />
          </Switch>
          */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
