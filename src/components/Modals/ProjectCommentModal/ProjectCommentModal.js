import React, { Component } from 'react'
import '../Modals.scss';
import { observer, inject } from 'mobx-react';
import ProjectCommentForm from '../../Forms/ProjectCommentForm';

@inject("ProjectStore")
@observer
export default class ProjectCommentModal extends Component {
  render() {
    return (
      <div className="modal__wrapper">
        <div className="modal__content">
          <header className="modal__header">
            <h3 className="thin">Give Feedback</h3>
            <span onClick={() => this.props.ProjectStore.toggleCommentModal(false)}>X</span>
          </header>

          <ProjectCommentForm />
        </div>  
      </div>
    )
  }
}
