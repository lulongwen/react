import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// App 根组件
import App from 'views/App'
import Admin from 'views/Admin'
import Home from 'views/Home'
import Common from 'views/Common'

import Buttons from 'views/UI/Button'
import Modals from 'views/UI/Modals'
import Notices from 'views/UI/Notices'
import Messages from 'views/UI/Messages'
import Tabs from 'views/UI/Tabs'
import Gallery from 'views/UI/Gallery'
import Carousels from 'views/UI/Carousels'

import Loadings from 'views/UI/Loadings'
import Login from 'views/Login'
import Register from 'views/Login/Register'

import Table from 'views/Table'
import HighTable from 'views/Table/HighTable'

import Order from 'views/Order'
import OrderDetail from 'views/Order/OrderDetail'

import Bar from 'views/Echarts'
import Pie from 'views/Echarts/Pie'
import Line from 'views/Echarts/Line'

import City from 'views/City'
import RichText from 'views/RichText'
import User from 'views/User'
import BikeMap from 'views/Map'

import Role from 'views/Role'
import Error404 from 'views/Error'

const Router = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/common' render={ () =>
          <Common>
            <Route
              exact
              path='common/order/detail:orderId'
              component={OrderDetail}/>
          </Common>
        } />
        <Route path='/' render={() =>
          <Admin>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/ui/buttons' component={Buttons} />
              <Route path='/ui/modals' component={Modals}/>
              <Route path='/ui/loadings' component={Loadings}/>
              <Route path='/ui/notices' component={Notices}/>
              
              <Route path='/ui/messages' component={Messages}/>
              <Route path='/ui/tabs' component={Tabs}/>
              <Route path='/ui/gallery' component={Gallery}/>
              <Route path='/ui/carousels' component={Carousels}/>
              <Route path='/order' component={Order}/>
              
              <Route path='/ui/table' component={Table}/>
              <Route path='/hightable' component={HighTable}/>
              <Route path='/richtext' component={RichText}/>
              <Route path='/city' component={City}/>
              <Route path='/bikemap' component={BikeMap}/>
              
              <Route path='/charts/bar' component={Bar}/>
              <Route path='/charts/pie' component={Pie}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/user' component={User}/>
              <Route path='/role' component={Role}/>
              
              <Route component={Error404}/>
              <Redirect to='/home'/>
            </Switch>
          </Admin>
        } />
      </Switch>
    </App>
  </BrowserRouter>
)

export default Router
