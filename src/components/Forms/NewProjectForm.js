import React, { Component } from 'react';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';
import { graphql } from 'react-apollo';

const CREATE_PROJECT = gql`
    mutation createProject($title: String, $description: String, $creator: String, $headline: String) {
        createProject(title: $title, description: $description, creator: $creator, headline: $headline)
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
            headline: "",
            creator: this.props.AuthStore.email,
            token: this.props.AuthStore.getCookie()
        }
    }

    _createProject = () => {
        const { title, description, creator, headline } = this.state;
        this.props.createProjectMutation({
            variables: {
                title,
                description,
                creator,
                headline
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log("Error!" + err));
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.title, this.state.description);
        this._createProject();
        this.props.ProjectStore.toggleProjectModal(false);
    }

    titleHandler = (e) => {
        const value = e.target.value;
        this.setState({title: value});
    }

    descriptionHandler = (e) => {
        const value = e.target.value;
        this.setState({description: value});
    }

    headlineHandler = (e) => {
        const value = e.target.value;
        this.setState({headline: value});
    }

    render() {
        return (
            <form className="form" onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Project Name" className="input" onChange={this.titleHandler} name="title"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Headline</label>
                    <input type="text" placeholder="In 255 characters or less, describe your project" className="input" onChange={this.headlineHandler} name="headline"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <textarea type="text" placeholder="What is this project's goals and purpose?" className="input" onChange={this.descriptionHandler} name="description"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default graphql(CREATE_PROJECT, { name: "createProjectMutation"})(NewProjectForm);