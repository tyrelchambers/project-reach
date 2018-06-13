import React, { Component } from 'react';
import './SignupPage.scss';
import SignupForm from '../../components/Forms/SignupForm';

export default class SignupPage extends Component {
  render() {
    return(
      <div className="container center">
        <h1>We are so glad you're going to begin your journey!</h1>
        <SignupForm/>
      </div>
    );
  }
}