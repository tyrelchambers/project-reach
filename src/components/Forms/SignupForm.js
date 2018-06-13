import React, { Component } from 'react';

export default class SignupForm extends Component {
  render() {
    return(
      <form>
        <div className="form-group">
          <input type="email" placeholder="Email"/>
        </div>
  
        <div className="form-group">
          <input type="password" placeholder="Password"/>
        </div>
  
        <div className="form-group">
          <input type="password" placeholder="Confirm Password"/>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}