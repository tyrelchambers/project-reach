import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import SignupPage from './pages/SignupPage/SignupPage';
import IndexPage from './pages/IndexPages/IndexPage';
import Header from './layouts/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Header/>
      <Route exact path="/" component={IndexPage}/>
      <Route exact path="/signup" component={SignupPage}/>
    </React.Fragment>
  </Router>, document.getElementById('root'));
registerServiceWorker();
