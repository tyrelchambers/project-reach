import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { observer, inject} from 'mobx-react';

const POST_COMMENT = gql`
  mutation postComment($comment: String, $project_id: String, $creator: String) {
    postComment(comment: $comment, project_id: $project_id, creator: $creator)
  }
`;

@inject('AuthStore')
@observer
class ProjectCommentForm extends Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    }
  }
  _postCommentHandler = () => {
    const { comment } = this.state;
    const project_id = this.props.project_id;
    this.props.postCommentMutation({
      variables: {
        comment,
        project_id,
        creator: this.props.AuthStore.getCookie()
      }
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    this._postCommentHandler();
  }

  commentHandler = (e) => {
    const value = e.target.value;

    this.setState({comment: value});
  }
  render() {
    return(
      <form className="form wide styled-block-form" onSubmit={this.submitHandler}>
        <div className="form-group">
          <textarea type="text" placeholder="Add a comment" className="input" onChange={this.commentHandler} name="comment" />
        </div>

        <button className="btn btn-primary">Post Comment</button>
      </form>
    );
  }
}

export default graphql(POST_COMMENT, { name: "postCommentMutation" })(ProjectCommentForm);