import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import './Navbar.scss';

@inject("AuthStore")
@observer
export default class Navbar extends Component {
  render() {
    return(
      <nav className="row">
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
        {!this.props.AuthStore.email ? (
          <React.Fragment>
            <NavLink to="/signup" activeClassName="active-link">Sign Up</NavLink>
            <NavLink to="/signin" activeClassName="active-link">Sign In</NavLink>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavLink to="/dashboard#overview" activeClassName="active-link">{this.props.AuthStore.email}</NavLink>
            <NavLink to="#" onClick={this.props.AuthStore.logout}>Logout</NavLink>
          </React.Fragment>
        )}
        
      </nav>
    );
  }
}