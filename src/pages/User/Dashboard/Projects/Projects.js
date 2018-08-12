import React, { Component } from 'react'
import DashboardProjectList from '../../../../components/DashboardProjectList/DashboardProjectList';
import './Projects.scss';
import NewProjectModal from '../../../../components/Modals/NewProjectModal/NewProjectModal';
import { inject, observer } from 'mobx-react';

@inject('AuthStore', "ProjectStore")
@observer
export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <button onClick={() => this.props.ProjectStore.toggleProjectModal(true)}>Create a new project</button>
        {this.props.ProjectStore.modalOpen &&
          <NewProjectModal />
        }
        <h3>Your Projects</h3>
        <DashboardProjectList />
      </div>
    )
  }
}
