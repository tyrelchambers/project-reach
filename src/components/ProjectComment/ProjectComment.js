import React from 'react';
import './ProjectComment.scss';

const ProjectComment = props => (
  <div className="project__comment">
    <p className="comment__message">{props.comment}</p>
    <p className="comment__creator">{props.creator}</p>
  </div>
)

export default ProjectComment;