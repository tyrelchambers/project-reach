import React, { Component } from 'react';
import './ProjectList.scss';

const projects = require('../../projects.json');

export default class ProjectList extends Component {

  

  render() {
    return(
      <div className="project-list">
        <div className="container center ">
          <div className="projects">
            <h3>Hot Projects</h3>
            <Projects/>
          </div>
        </div>
      </div> 
    );
  }
}

const Projects = () => {
  return (
    <React.Fragment>
      {projects.projects.map((x, id) => (
        <div className="project__item row ai-c center" key={id}>
          <div className="row">
            <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png" alt="" className="image small"/>
            <div className="column">
              <h3>{x.title}</h3>
              <p className="italic">{x.author}</p>
            </div>
          </div>
          <div className="project-stats row">
            <div className="row ai-c">
              <i className="fas fa-fire icon-primary"></i>
              <p>{x.likes}</p>
            </div>
            <div className="row ai-c">
              <i className="far fa-comment light-grey"></i>
              <p>{x.commentCount}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}