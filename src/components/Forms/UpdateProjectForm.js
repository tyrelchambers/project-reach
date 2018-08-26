import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const UPDATE_PROJECT = gql`
  mutation updateProject($creator: String,, $title: String, $description: String) {
    updateProject(creator: $creator, title: $title, description: $description)
  }
`;
@inject('AuthStore', "ProjectStore")
@observer
class UpdateProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "" || this.props.ProjectStore.title,
        description: "" || this.props.ProjectStore.description,
        creator: this.props.AuthStore.getCookie(),
        project_id: this.props.ProjectStore.project_id
    }
}

_updateProject = () => {
    const { title, description, creator, project_id } = this.state;
    this.props.updateProjectMutation({
        variables: {
            title,
            description,
            creator,
            project_id
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log("Error!" + err));
}

submitForm = (e) => {
    e.preventDefault();
    this._updateProject();
    this.props.ProjectStore.toggleProjectModal(false, {});
}

titleHandler = (e) => {
    const value = e.target.value;
    this.setState({title: value});
}

descriptionHandler = (e) => {
    const value = e.target.value;
    this.setState({description: value});
}
  render() {
    return(
      <form className="form" onSubmit={this.submitForm}>
        <div className="form-group">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Project Name" className="input" onChange={this.titleHandler} name="title" value={this.state.title ? this.state.title : ""}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Headline</label>
            <input type="text" placeholder="In 255 characters or less, describe your project" className="input" onChange={this.headlineHandler} name="headline" value={this.state.headline ? this.state.headline : ""}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Description</label>
            <textarea type="text" placeholder="What is this project's goals and purpose?" className="input" onChange={this.descriptionHandler} name="description" value={this.state.description ? this.state.description : ""}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default graphql(UPDATE_PROJECT, { name: "updateProjectMutation"})(UpdateProjectForm);