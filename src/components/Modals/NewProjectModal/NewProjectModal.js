import React, { Component } from 'react'
import '../Modals.scss';
import { observer, inject } from 'mobx-react';
import NewProjectForm from '../../Forms/NewProjectForm';

@inject("ProjectStore")
@observer
export default class NewProjectModal extends Component {
  render() {
    return (
      <div className="modal__wrapper">
        <div className="modal__content">
          <header className="modal__header">
            <h3>Create a new project</h3>
            <span onClick={this.props.ProjectStore.toggleProjectModal}>X</span>
          </header>

          <NewProjectForm/>
        </div>  
      </div>
    )
  }
}
