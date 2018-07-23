import React, { Component } from 'react';
import gql from 'graphql-tag';
import { observer, inject } from '../../../node_modules/mobx-react';
import { graphql } from 'react-apollo';

const CREATE_PROJECT = gql`
    mutation createProject($title: String, $description: String) {
        createProject(title: $title, description: $description)
    }
`;

@inject("ProjectStore")
@observer
class NewProjectForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: ""
        }
    }

    _createProject = () => {
        const { title, description } = this.state;
        this.props.createProjectMutation({
            variables: {
                title,
                description
            }
        })
        .then(res => console.log(res))
        .catch(err => console.err("Error!" + err));
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
                    <input type="text" placeholder="Project Name" className="input" onChange={this.titleHandler} name="title"/>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="What is this project's goals and purpose?" className="input" onChange={this.descriptionHandler} name="description"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default graphql(CREATE_PROJECT, { name: "createProjectMutation"})(NewProjectForm);