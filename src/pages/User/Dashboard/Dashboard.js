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
          {this.props.location.search === "?panel=account" && 
            <Account/>
          }

          {this.props.location.search === "?panel=projects" && 
            <Projects/>
          }

          {this.props.location.search === "?panel=overview" && 
            <Overview/>
          }

          {this.props.location.search === "?panel=social" && 
            <Social/>
          }
        </div>
      </React.Fragment>
    )
  }
}
