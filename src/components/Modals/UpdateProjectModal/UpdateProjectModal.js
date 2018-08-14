import React, { Component } from 'react'
import '../Modals.scss';
import { observer, inject } from 'mobx-react';
import UpdateProjectForm from '../../Forms/UpdateProjectForm';

@inject("ProjectStore")
@observer
export default class NewProjectModal extends Component {
  render() {
    return (
      <div className="modal__wrapper">
        <div className="modal__content">
          <header className="modal__header">
            <h3>Update your project details</h3>
            <span onClick={() => this.props.ProjectStore.toggleUpdateProjectModal(false, {})}>X</span>
          </header>

          <UpdateProjectForm title={this.props.title} id={this.props.id} description={this.props.description}/>
        </div>  
      </div>
    )
  }
}
