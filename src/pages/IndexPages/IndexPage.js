import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './IndexPage.scss';
import ProjectList from '../../components/ProjectList/ProjectList';

class IndexPage extends Component {
  render() {
    return(
      <div className="hero">
        <div className="container center column jc-c h-100">
          <div className="row">
            <div className="half ">
              <h2 className="bold">Have a great idea for your next project, but need a solid core of people to get off the ground?</h2>
              <p>Here you can pitch your idea, gain feedback, and attract other people with skills to help you get your project/idea, started.</p>
            </div>
            <div className="half column">
              <p className="bold secondary tc-c">Sign up and begin your journey</p>
              <NavLink to="/signup" className="btn btn-primary">Sign Up</NavLink>
            </div>
          </div>
        </div>
        <ProjectList/>
      </div>
    );
  }
}

export default IndexPage;