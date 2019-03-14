import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


import store from './store';
import Header from './public/Header';
import Home from './pages/Home';
import Detail from './pages/Detail/loadable.js';
import Login from './pages/Login';
import Write from './pages/Write';


class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="router">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
