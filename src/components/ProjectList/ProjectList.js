import React, { Component } from 'react';
import './ProjectList.scss';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import LoadingSplash from '../LoadingSplash/LoadingSplash';

const ALL_PROJECTS = gql`
  {
    allProjects {
      title,
      headline,
      _id,
      feedback {
        comment
      }
    }
  }
`;
class ProjectList extends Component {
  render() {
    return(
      <Query
        query={ALL_PROJECTS}
      >
        {({loading, error, data}) => {
          if (loading) return <LoadingSplash/>;
          if (error) return error;
          return(
            <div className="project-list">
              <div className="container center ">
                <div className="projects">
                  <h3>All Projects</h3>
                  {data.allProjects.map((x,id) => {
                    return(
                      <Projects key={id} id={x._id} title={x.title} headline={x.headline} commentCount={x.feedback.length}/>
                    );
                  })}
                </div>
              </div>
            </div> 
          );
        }}
      </Query>
    );
  }
}

const Projects = (props) => {
  return (
    <React.Fragment>
      <div className=" row center project__item">
        <a href={`/project/${props.id}`} className="full-width no-decoration" >
          <div className="row">
            <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png" alt="" className="image small"/>
            <div className="column">
              <h3>{props.title}</h3>
              <p className="italic">{props.headline}</p>
            </div>
            </div>
          </a>
        <div className="project-stats row">
          <div className="row ">
            <i className="fas fa-fire icon-primary"></i>
            <p className="bold">40</p>
          </div>
          <div className="row ">
            <i className="far fa-comment light-grey"></i>
            <p className="bold">{props.commentCount}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectList;