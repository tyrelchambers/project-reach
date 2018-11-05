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
        {window.localStorage.getItem("jwt") ? (
          <React.Fragment>
            <NavLink to="/dashboard?panel=projects" activeClassName="active-link">{this.props.AuthStore.email}</NavLink>
            <NavLink to="#" onClick={this.props.AuthStore.logoutUser}>Logout</NavLink>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavLink to="/signup" activeClassName="active-link">Sign Up</NavLink>
            <NavLink to="/signin" activeClassName="active-link">Sign In</NavLink>
          </React.Fragment>
        )}
      </nav>
    );
  }
}