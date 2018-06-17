import React, { Component } from 'react'
import DashboardNavbar from '../../../layouts/Navbar/DashboardNavbar/DashboardNavbar';
import Account from './Account/Account';
import Projects from './Projects/Projects';
import Overview from './Overview/Overview';
import Social from './Social/Social';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <DashboardNavbar />
        <div className="container center">
          {this.props.location.hash === "#account" && 
            <Account/>
          }

          {this.props.location.hash === "#projects" && 
            <Projects/>
          }

          {this.props.location.hash === "#overview" && 
            <Overview/>
          }

          {this.props.location.hash === "#social" && 
            <Social/>
          }
        </div>
      </React.Fragment>
    )
  }
}
