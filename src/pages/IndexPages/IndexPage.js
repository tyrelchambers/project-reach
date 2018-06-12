import React, { Component } from 'react';
import './IndexPage.scss';

class IndexPage extends Component {
  render() {
    return(
      <div className="hero">
        <div className="container center column jc-c h-100">
          <div className="half ">
            <h2 className="bold">Have a great idea for your next project, but need a solid core of people to get off the ground?</h2>
            <p>Here you can pitch your idea, gain feedback, and attract other people with skills to help you get your project/idea, off the ground</p>
          </div>
          <div className="half">
            <p className="text-secondary">Sign yup and begin your journey</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;