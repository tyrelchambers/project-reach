import React, { Component } from 'react';

class ProjectCommentForm extends Component {
  render() {
    return(
      <form className="form wide">
        <div className="form-group">
          <textarea type="text" placeholder="Add a comment" className="input" onChange="" name="comment"/>
        </div>
      </form>
    );
  }
}

export default ProjectCommentForm;