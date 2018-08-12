import React, { Component } from 'react';
import gql from 'graphql-tag';
import { observer, inject } from '../../../node_modules/mobx-react';
import { graphql } from 'react-apollo';

const CREATE_PROJECT = gql`
    mutation createProject($title: String, $description: String, $creator: String) {
        createProject(title: $title, description: $description, creator: $creator)
    }
`;

@inject("ProjectStore", "AuthStore")
@observer
class NewProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            creator: this.props.AuthStore.email,
            token: this.props.AuthStore.getCookie()
        }
    }

    _createProject = () => {
        const { title, description, creator } = this.state;
        this.props.createProjectMutation({
            variables: {
                title,
                description,
                creator
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log("Error!" + err));
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.title, this.state.description);
        this._createProject();
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
        return (
            <form className="form" onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Project Name" className="input" onChange={this.titleHandler} name="title"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder="What is this project's goals and purpose?" className="input" onChange={this.descriptionHandler} name="description"/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.props.ProjectStore.toggleProjectModal(false)}>Submit</button>
            </form>
        );
    }
}

export default graphql(CREATE_PROJECT, { name: "createProjectMutation"})(NewProjectForm);