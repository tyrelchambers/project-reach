import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DashboardNavbar.scss';

export default class DashboardNavbar extends Component {
  render() {
    return (
      <nav className="subnav row jc-c">
        <Link to="?panel=projects" className="subnav__item column ai-c">
          <i className="fas fa-folder"></i>
          Projects
        </Link>
        <Link to="?panel=account" className="subnav__item column ai-c">
          <i className="fas fa-users-cog"></i>
          Account
        </Link>

      </nav>
    )
  }
}
