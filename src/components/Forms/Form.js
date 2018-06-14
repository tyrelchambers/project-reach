import React from 'react';

const Form = (props) => (
  <form className="form">
    <div className="form-group">
      <input type="email" placeholder="Email" className="input"/>
    </div>

    <div className="form-group">
      <input type="password" placeholder="Password" className="input"/>
    </div>

    <div className="form-group">
      <input type="password" placeholder="Confirm Password" className="input"/>
    </div>

    <button type="submit" onClick={props.clicked} className="btn btn-primary">Submit</button>
  </form>
)

export default Form;