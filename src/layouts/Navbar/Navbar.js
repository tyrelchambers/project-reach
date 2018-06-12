import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return(
      <nav>
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
      </nav>
    );
  }
}