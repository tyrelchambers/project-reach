import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return(
      <nav>
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
        <NavLink to="/signup" activeClassName="active-link">Sign Up</NavLink>
        <NavLink to="/signin" activeClassName="active-link">Sign In</NavLink>
      </nav>
    );
  }
}