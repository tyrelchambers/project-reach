import React, { Component } from 'react';
import '../Modals.scss';
import ConfirmPasswordForm from '../../Forms/ConfirmPasswordForm';

class ConfirmPasswordModal extends Component {
  render() {
    return(
      <div className="modal__wrapper">
        <div className="modal__content">
          <header className="modal__header">
            <h3>Confirm your password</h3>
            <span onClick={() => this.props.closeModalHandler}>X</span>
          </header>
          <ConfirmPasswordForm />
        </div>  
      </div>
    );
  }
}

export default ConfirmPasswordModal;