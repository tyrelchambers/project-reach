import React from 'react';

const LoginForm = (props) => (
  <form className="form" onSubmit={props.submitted}>
    <div className="form-group">
      <input type="email" placeholder="Email" className="input" onChange={props.emailHandler} name="email"/>
    </div>

    <div className="form-group">
      <input type="password" placeholder="Password" className="input" onChange={props.passwordHandler} name="password"/>
    </div>

    <button type="submit" onClick={props.clicked} className="btn btn-primary">Submit</button>
  </form>
)

export default LoginForm;