import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { inject, observer } from 'mobx-react';
import DeleteProject from './DashboardProjectActions/DeleteProject';
import UpdateProject from './DashboardProjectActions/UpdateProject';
import LoadingSplash from '../LoadingSplash/LoadingSplash';

const ALL_PROJECTS = gql`
  query projects($creator: String) {
    projects(creator: $creator) {
      title,
      description,
      headline,
      _id
    }
  }
`;

@inject("AuthStore", "ProjectStore")
@observer
export default class DashboardProjectList extends Component {
  constructor() {
    super();
    this.state = {
      projectModalOpen: false
    }
  }


  render() {
    return(
      <Query 
        query={ALL_PROJECTS} 
        variables={{creator: this.props.AuthStore.getCookie()}}
        pollInterval={500}
      >
      {({loading, error, data}) => {
        if (loading) return <LoadingSplash/>;
        if (error) return error;

        return (
          <div className="dashboard__project--list">
            {data.projects.map((x, id) => (
              <div className="project" key={id}>
                <a href={`/project/${x._id}`} className=" no-decoration" key={id} onClick={this.modalHandler}>
                  <div className="project__info">
                    <h3 className="project__title">{x.title}</h3>
                    <p className="project__description subtitle">{x.headline}</p>
                  </div>
                </a>
                <div className="project__actions">
                  <span>
                    <UpdateProject title={x.title} description={x.description} headline={x.headline} id={x._id}/> 
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
