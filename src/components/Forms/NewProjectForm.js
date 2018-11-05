import React, { Component } from 'react';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';
import { graphql } from 'react-apollo';

const CREATE_PROJECT = gql`
    mutation createProject($title: String, $description: String, $creator: String, $headline: String, $website: String, $twitter: String, $facebook: String, $instagram: String) {
        createProject(title: $title, description: $description, creator: $creator, headline: $headline, website: $website, twitter: $twitter, facebook: $facebook, instagram: $instagram)
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
            token: this.props.AuthStore.getCookie(),
            website: "",
            twitter: "",
            facebook: "",
            instagram: ""
        }
    }

    _createProject = () => {
        const { title, description, creator, headline, website, twitter, facebook, instagram } = this.state;
        this.props.createProjectMutation({
            variables: {
                title,
                description,
                creator,
                headline,
                website,
                twitter,
                facebook,
                instagram
            }
        });
    }

    submitForm = (e) => {
        e.preventDefault();
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

    websiteHandler = (e) => {
        const value = e.target.value;
        this.setState({website: value});
    }

    twitterHandler = e => {
        const value = e.target.value;
        this.setState({twitter: value});
    }

    facebookHandler = e => {
        const value = e.target.value;
        this.setState({facebook: value});
    }

    instagramHandler = e => {
        const value = e.target.value;
        this.setState({instagram: value});
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
                    <label htmlFor="">Website</label>
                    <input type="text" placeholder="Does your project have a website? Github perhaps?" className="input" onChange={this.websiteHandler} name="website"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Twitter</label>
                    <input type="text" placeholder="Twitter Handle" className="input" onChange={this.twitterHandler} name="headline"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Facebook</label>
                    <input type="text" placeholder="Facebook profile" className="input" onChange={this.facebookHandler} name="headline"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Instagram</label>
                    <input type="text" placeholder="Instagram profile" className="input" onChange={this.instagramHandler} name="headline"/>
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