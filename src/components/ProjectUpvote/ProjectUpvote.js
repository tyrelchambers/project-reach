import React from 'react';
import '../../assets/stylesheets/btn.scss';

const ProjectUpvote = (props) => (
  <button className="bold uppercase btn btn-primary no-margin wide" onClick={props.upvote}>upvote {props.count}</button>
)

export default ProjectUpvote;