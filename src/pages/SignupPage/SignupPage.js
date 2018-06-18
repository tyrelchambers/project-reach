import React, { Component } from 'react';

import './SignupPage.scss';
import Form from '../../components/Forms/Form';

export default class SignupPage extends Component {
  render() {
    return(
      <div className="container center column ai-c">
        <h1>We are so glad you're going to begin your journey!</h1>
        <Form/>
      </div>
    );
  }
}