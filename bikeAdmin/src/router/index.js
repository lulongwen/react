import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from '@/views/App'
import Admin from '@/views/Admin'
import Login from '@/views/Login'

import Buttons from '@/views/UI/Button'
import Error404 from '@/views/Error'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <App>
          <Route path='/login' component={Login} />
          <Route path='/' render={() =>
            <Admin>
              <Route exact path='/ui/buttons' component={Buttons} />
            </Admin>
          } />
          
          <Route component={Error404}/>
        </App>
      </BrowserRouter>
    )
  }
}

export default Router
