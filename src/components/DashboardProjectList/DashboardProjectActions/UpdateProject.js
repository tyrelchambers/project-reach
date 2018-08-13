import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';

const UPDATE_PROJECT = gql`
  mutation updateProject($creator: String, $project_id: String) {
    updateProject(creator: $creator, project_id: $project_id)
  }
`;

@inject("AuthStore", "ProjectStore")
@observer
class UpdateProject extends Component {

  updateProjectHandler = () => {
    this.props.updateProjectMutation({
      variables: {
        creator: this.props.AuthStore.getCookie(),
        project_id: this.props.id
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <i className="fas fa-pencil-alt success" onClick={() => this.props.ProjectStore.toggleProjectModal(true)}></i>
    );
  }
}

export default graphql(UPDATE_PROJECT, {name: "updateProjectMutation"})(UpdateProject);