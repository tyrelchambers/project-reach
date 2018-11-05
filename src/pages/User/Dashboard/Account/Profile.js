import React, { Component } from 'react';
import './Account.scss';
import ProfileForm from '../../../../components/Forms/ProfileForm';

class Profile extends Component {
  render() {
    return(
      <div className="profile__section">
        <h1 className="dashboard__title">Profile</h1>
        <ProfileForm/>
      </div>
    );
  }
}

export default Profile;