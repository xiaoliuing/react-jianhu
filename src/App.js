import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Details from './pages/details/loadable'
import Header from './commend/header';
import Downloadapp from './pages/downloadapp';
import Writer from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/login' exact component={ Login }></Route>
              <Route path='/' exact component={ Home }></Route>
              <Route path='/writer' exact component={ Writer }></Route>
              <Route path='/details/:id' exact component={ Details }></Route>
              <Route path='/downloadapp' exact component={ Downloadapp }></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>     
    );
  }
}

export default App;
