import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'mobx-react';
import './index.scss';

import SignupPage from './pages/SignupPage/SignupPage';
import IndexPage from './pages/IndexPages/IndexPage';
import Header from './layouts/Header/Header';
import Dashboard from './pages/User/Dashboard/Dashboard';
import ProjectIndexPage from './pages/ProjectIndexPage/ProjectIndexPage';
import AuthStore from './stores/AuthStore';
import ProjectStore from './stores/ProjectStore';
import LoginPage from './pages/Loginpage/LoginPage';

import registerServiceWorker from './registerServiceWorker';

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const store = {
  AuthStore,
  ProjectStore
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider {...store}>
      <Router basename="/">
        <React.Fragment>
          <Header/>
          <Route exact path="/" component={IndexPage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route exact path="/signin" component={LoginPage}/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/project/:project_slug" component={ProjectIndexPage} />
        </React.Fragment>
      </Router>
    </Provider>
  </ApolloProvider>
  
  , document.getElementById('root'));
registerServiceWorker();
