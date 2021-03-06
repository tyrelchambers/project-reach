import React, { Component } from 'react'
import AccountForm from '../../../../components/Forms/AccountForm';
import './Account.scss';
import { observer, inject } from 'mobx-react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ConfirmPasswordModal from '../../../../components/Modals/ConfirmPasswordModal/ConfirmPasswordModal';
import Profile from './Profile';

const UPDATE_ACCOUNT = gql`
  mutation updateAccount($email: String, $password: String, $username: String, $creator: String) {
    updateAccount(email: $email, password: $password, username: $username, creator: $creator)
  }
`;
@inject("AuthStore", "ProjectStore")
@observer
class Account extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: "",
      username: "",
      openModal: false
    }
  }

  emailHandler = (e) => {
    const value = e.target.value;
    this.setState({email: value});
  }

  passwordHandler = e => {
    const value = e.target.value;
    this.setState({password: value});
  }

  usernameHandler = e => {
    const value = e.target.value;
    this.setState({username: value});
  }

  submitted = (e) => {
    e.preventDefault();
    this._updateAccount();
  }

  _updateAccount = () => {
    const { email, password, username } = this.state;
    this.props.updateAccountMutation({
      variables: {
        email,
        username,
        password,
        creator: this.props.AuthStore.getCookie()
      }
    })
    .then(res => {
      this.props.AuthStore.setEmail(this.state.email);
      this.props.AuthStore.setPassword(this.state.password);
      this.props.AuthStore.setUsername(this.state.username);
    });
  }

  // modalHandler = (e) => {
  //   e.preventDefault();
  //   this.setState({openModal: !this.state.openModal});
  // }
  render() {
    return (
      <div className="dashboard__panel">
        <Profile/>

        <h1 className="dashboard__title">Account</h1>
        <div className="row account__sub-panel">
          <main className="account__main">
            <AccountForm usernameHandler={this.usernameHandler} submitted={this.submitted} emailHandler={this.emailHandler} passwordHandler={this.passwordHandler} />

            {/* {this.state.openModal && 
              <ConfirmPasswordModal toggleModal={this.modalHandler}/>
            } */}
          </main>
        </div>
      </div>
    )
  }
}

export default graphql(UPDATE_ACCOUNT, {name: "updateAccountMutation"})(Account);