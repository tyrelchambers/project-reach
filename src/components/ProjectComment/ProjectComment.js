import React from 'react';
import './ProjectComment.scss';

const ProjectComment = props => (
  <div className="project__comment">
    <p>{props.comment}</p>
    <p>{props.creator}</p>
  </div>
)

export default ProjectComment;