import React, { Component } from 'react'
import DashboardProjectList from '../../../../components/DashboardProjectList/DashboardProjectList';
import './Projects.scss';
import NewProjectModal from '../../../../components/Modals/NewProjectModal/NewProjectModal';
import UpdateProjectModal from '../../../../components/Modals/UpdateProjectModal/UpdateProjectModal';
import { inject, observer } from 'mobx-react';

@inject('AuthStore', "ProjectStore")
@observer
export default class Projects extends Component {
  render() {
    return (
      <div className="dashboard__panel">
        <h1 className="dashboard__title">Projects</h1>
        <button 
          className="btn btn-primary" 
          onClick={() => this.props.ProjectStore.toggleProjectModal(true)}>
          
          <i className="fas fa-plus"></i>
          Create a new project
        </button>

        {this.props.ProjectStore.modalOpen &&
          <NewProjectModal />
        }
        {this.props.ProjectStore.updateModalOpen &&
          <UpdateProjectModal />
        }
        
        <DashboardProjectList />
      </div>
    )
  }
}
