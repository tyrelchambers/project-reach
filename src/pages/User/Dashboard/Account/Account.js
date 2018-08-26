import React, { Component } from 'react'
import AccountForm from '../../../../components/Forms/AccountForm';
import './Account.scss';
import AccountInfo from '../../../../components/AccountInfo/AccountInfo';

export default class Account extends Component {
  render() {
    return (
      <div className="dashboard__panel">
        <h1 className="dashboard__title">Account</h1>
        <div className="row account__sub-panel">
          <main className="account__main">
            <AccountForm />
          </main>
          <aside className="account__aside">
            <div className="container small">
              <h3 className="uppercase font small">Your Information</h3>
              <AccountInfo />
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
