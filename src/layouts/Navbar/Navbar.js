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
        <NavLink to="/signup" activeClassName="active-link">Sign Up</NavLink>
        <NavLink to="/signin" activeClassName="active-link">Sign In</NavLink>
        <NavLink to="/dashboard#overview" activeClassName="active-link">{this.props.AuthStore.email}</NavLink>
      </nav>
    );
  }
}