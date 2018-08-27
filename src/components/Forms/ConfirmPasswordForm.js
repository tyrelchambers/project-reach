import React from 'react';

const ConfirmPasswordForm = (props) => (
  <form className="form" onSubmit={props.submitted}>
    <div className="form-group">
      <input type="password" placeholder="Password" className="input" onChange={props.passwordHandler} name="password"/>
    </div>

    <button type="submit" onClick={props.clicked} className="btn btn-primary">Continue</button>
  </form>
)

export default ConfirmPasswordForm;