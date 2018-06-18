import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.scss';

import SignupPage from './pages/SignupPage/SignupPage';
import IndexPage from './pages/IndexPages/IndexPage';
import Header from './layouts/Header/Header';
import Dashboard from './pages/User/Dashboard/Dashboard';

import registerServiceWorker from './registerServiceWorker';

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router basename="/">
      <React.Fragment>
        <Header/>
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/dashboard" component={Dashboard} />
      </React.Fragment>
    </Router>
  </ApolloProvider>
  
  , document.getElementById('root'));
registerServiceWorker();
