import React, { Component } from 'react';
import { Query} from 'react-apollo';
import gql from 'graphql-tag';
import { inject, observer } from 'mobx-react';

const ALL_PROJECTS = gql`
  
  query projects($creator: String) {
    projects(creator: $creator) {
      title,
      description
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
          <React.Fragment>
            {data.projects.map((x, id) => (
              <div key={id}>
                <h3>{x.title}</h3>
              </div>
            ))}
          </React.Fragment>
        );
      }}
    </Query>
    );
  }
}
