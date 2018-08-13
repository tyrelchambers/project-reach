import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { inject, observer } from 'mobx-react';
import DeleteProject from '../DashboardProjectList/DashboardProjectActions/DeleteProject';
import UpdateProject from '../DashboardProjectList/DashboardProjectActions/UpdateProject';

const ALL_PROJECTS = gql`
  query projects($creator: String) {
    projects(creator: $creator) {
      title,
      description,
      _id
    }
  }
`;

@inject("AuthStore")
@observer
export default class DashboardProjectList extends Component {
  render() {
    return(
      <Query 
        query={ALL_PROJECTS} 
        variables={{creator: this.props.AuthStore.getCookie()}}
        pollInterval={500}
      >
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return error;

        return (
          <div className="dashboard__project--list">
            {data.projects.map((x, id) => (
              <div key={id} className="project">
                <div className="project__info">
                  <h3 className="project__title">{x.title}</h3>
                  <p className="project__description subtitle">{x.description}</p>
                </div>
                <div className="project__actions">
                  <span>
                    <UpdateProject id={x._id} title={x.title} description={x.description}/>
                  </span>
                  <DeleteProject id={x._id}/>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    </Query>
    );
  }
}
