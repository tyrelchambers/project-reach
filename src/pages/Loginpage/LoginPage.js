import React, { Component } from 'react';
import './LoginPage.scss';
import LoginForm from '../../components/Forms/LoginForm';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';

const LOGIN_MUTATION = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password)
  }
`;

@inject('AuthStore')
@observer
class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  emailHandler = (e) => {
    const value = e.target.value;
    this.setState({email: value})
  }

  passwordHandler = (e) => {
    const value = e.target.value;
    this.setState({password: value});
  }

  loginHandler = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    this.props.loginMutation({
      variables: {
        email,
        password
      }
    })
    .then(res => {
      this.props.AuthStore.setEmail(this.state.email);
      this.props.AuthStore.setCookie(res.data.login);
      window.location.pathname = "/";
    });
  }

  render() {
    return(
      <div className="container center column ai-c">
        <h1>Login</h1>
        <LoginForm submitted={this.loginHandler} emailHandler={this.emailHandler} passwordHandler={this.passwordHandler}/>
      </div>
    );
  }
}

export default graphql(LOGIN_MUTATION, {name: "loginMutation"})(LoginPage);