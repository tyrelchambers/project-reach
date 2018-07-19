import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';
import './SignupPage.scss';
import Form from '../../components/Forms/SignupForm';

const CREATE_USER = gql`
  mutation createUser($email: String, $password: String) {
    createUser(email: $email, password: $password)
  }
`;

@inject("AuthStore")
@observer
class SignupPage extends Component {
  state = {
    email: "",
    password: ""
  }

  _createUser =  () => {
    const { email, password } = this.state;
    this.props.createUserMutation({
      variables: {
        email,
        password
      }
    })
    .then(res => {
      this.props.AuthStore.setEmail(this.state.email);
      this.props.AuthStore.setCookie(res.data.createUser)
    })
    .catch(rej => console.log(rej));
  }
  
  render() {
    return(
      <div className="container center column ai-c">
        <h1>We are so glad you're going to begin your journey!</h1>
        <Form 
        submitted={(e) => {
          e.preventDefault();
          this._createUser();       
        }}
        
        emailHandler={(e) => {
          const email = e.target.value;
          this.setState({email});
        }}
        passwordHandler={(e) => {
          const password = e.target.value;
          this.setState({password});
        }}
        />
      </div>
    );
  }
}

export default graphql(CREATE_USER, { name: 'createUserMutation'})(SignupPage);