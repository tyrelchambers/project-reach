import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { observer, inject } from 'mobx-react';

const DELETE_PROJECT = gql`
  mutation deleteProject($creator: String, $project_id: String) {
    deleteProject(creator: $creator, project_id: $project_id)
  }
`;

@inject('AuthStore')
@observer
class DeleteProject extends Component {
  
  deleteProjectHandler = (props) => {
    console.log('dat function');
    this.props.deleteProjectMutation({
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
      <i className="far fa-trash-alt danger" onClick={() => this.deleteProjectHandler()}></i>
    );
  }
}

export default graphql(DELETE_PROJECT, {name: "deleteProjectMutation"})(DeleteProject);