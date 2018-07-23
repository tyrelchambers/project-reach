import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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
    password: "",
    errors: []
  }

  validation = () => {
    this.state.errors.map(x => {
      return toast.error(x);
    });
  }

  _createUser = () => {
    const { email, password } = this.state;
    this.props.createUserMutation({
      variables: {
        email,
        password
      }
    })
    .then(res => {
      this.props.AuthStore.setEmail(this.state.email);
      this.props.AuthStore.setCookie(res.data.createUser);
      window.location.pathname = "/";
    })
    .catch(rej => console.log(rej));
  }
  
  render() {
    let errors = [];
    return(
      <div className="container center column ai-c">
        <h1>We are so glad you're going to begin your journey!</h1>
        <ToastContainer />
        <Form 
        submitted={async (e) => {
          e.preventDefault();
          if (!this.state.email) errors.push("Email must be provided");
          if (!this.state.password) errors.push("Password must be provided");
          if (errors.length > 0) {
            await this.setState({errors});
            this.validation();
          };       
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