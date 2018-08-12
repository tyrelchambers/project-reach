import React, { Component } from 'react'
import DashboardProjectList from '../../../../components/DashboardProjectList/DashboardProjectList';
import './Projects.scss';
import NewProjectModal from '../../../../components/Modals/NewProjectModal/NewProjectModal';
import { inject, observer } from 'mobx-react';

@inject('AuthStore', "ProjectStore")
@observer
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.ProjectStore.toggleProjectModal
    }
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <button onClick={this.state.isOpen}>Create a new project</button>
        {this.state.isOpen &&
          <NewProjectModal />
        }
        <h3>Your Projects</h3>
        <DashboardProjectList />
      </div>
    )
  }
}
