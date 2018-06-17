import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import './index.scss';

import SignupPage from './pages/SignupPage/SignupPage';
import IndexPage from './pages/IndexPages/IndexPage';
import Header from './layouts/Header/Header';
import Dashboard from './pages/User/Dashboard/Dashboard';

import AuthStore from './stores/AuthStore';

import registerServiceWorker from './registerServiceWorker';

const stores = {
  AuthStore
};

ReactDOM.render(
  <Provider {...stores}>
    <Router basename="/">
      <React.Fragment>
        <Header/>
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/dashboard" component={Dashboard} />
      </React.Fragment>
    </Router>
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();
