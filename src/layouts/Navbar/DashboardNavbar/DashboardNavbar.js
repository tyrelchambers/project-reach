import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DashboardNavbar.scss';

export default class DashboardNavbar extends Component {
  render() {
    return (
      <nav className="subnav row jc-c">
        <Link to="#overview" className="subnav__item column ai-c">
          <i class="fas fa-tachometer-alt"></i>
          Overview
        </Link>
        <Link to="#projects" className="subnav__item column ai-c">
          <i class="fas fa-folder"></i>
          Projects
        </Link>
        <Link to="#social" className="subnav__item column ai-c">
          <i class="fas fa-users"></i>
          Social
        </Link>
        <Link to="#account" className="subnav__item column ai-c">
          <i class="fas fa-users-cog"></i>
          Account
        </Link>

      </nav>
    )
  }
}
