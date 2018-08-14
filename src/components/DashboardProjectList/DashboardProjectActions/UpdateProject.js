import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("AuthStore", "ProjectStore")
@observer
export default class UpdateProject extends Component {
  render() {
    return(
      <React.Fragment>
        <i className="fas fa-pencil-alt success" onClick={() => this.props.ProjectStore.toggleUpdateProjectModal(true, {title: this.props.title, description: this.props.description, project_id: this.props.id, creator: this.props.AuthStore.getCookie()})}></i>
        
      </React.Fragment>
      
    );
  }
}
