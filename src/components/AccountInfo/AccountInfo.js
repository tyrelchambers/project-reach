import React, { Component } from 'react';
import './AccountInfo.scss';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';

const USER_INFO = gql`
  query account($token: String){
    account(token: $token) {
      email,
      username
    }
  }
`;

@inject("AuthStore")
@observer
class AccountInfo extends Component {
  render() {
    return(
      <Query
        query={USER_INFO}
        variables={{token: this.props.AuthStore.getCookie()}}
      >
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return new Error(error);
        return(
          <div className="box">
            <p>Username: {data.account.username}</p>
            <p>Email: {data.account.email}</p>
          </div>
        );
      }}
      </Query>
    );
  }
}

export default AccountInfo;