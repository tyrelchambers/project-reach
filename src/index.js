import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import IndexPage from './pages/IndexPages/IndexPage';
import Header from './layouts/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Header/>
      <Route path="/" component={IndexPage}/>
    </React.Fragment>
  </Router>, document.getElementById('root'));
registerServiceWorker();
