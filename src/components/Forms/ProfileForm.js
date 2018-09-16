import React from 'react';
import '../../assets/stylesheets/forms.scss';

const ProfileForm = () => (
  <form className="form center wide">
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input type="text" placeholder="Change first name" className="input"/>
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" placeholder="Change last name" className="input"/>
    </div>
  </form>
)

export default ProfileForm;