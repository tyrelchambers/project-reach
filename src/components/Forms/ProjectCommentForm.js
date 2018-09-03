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
      <form className="form center" onSubmit={this.submitHandler}>
        <div className="form-group column ai-c">
          <h3 className="bold">Is the project interesting?</h3>
          <div className="row social-vote__list">
            <div className="social-vote__item ai-c jc-c row social-vote__item--upvote">
              <i className="far fa-thumbs-up icon no-margin"></i>
            </div>
            <div className="social-vote__item ai-c jc-c row social-vote__item--mehvote">
              <div className="dash icon no-margin"></div>
            </div>
            <div className="social-vote__item ai-c jc-c row social-vote__item--downvote">
              <i className="far fa-thumbs-down icon no-margin"></i>
            </div>
          </div>
        </div>
        <div className="row jc-sb">
          <div className="form-group ai-c">
            <h3>Pros:</h3>
            <select name="pros-list" className="select-field" id="prosList">
              <option value="" disabled selected>Pick a pro</option>
              <option value="interesting-idea">Interesting Idea</option>
            </select>
          </div>

          <div className="form-group ai-c">
            <h3>Cons:</h3>
            <select name="pros-list" className="select-field" id="consList">
              <option value="" disabled selected>Pick a con</option>
              <option value="not-feasible">Not feasible</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Leave your feedback</label>
          <textarea type="text" placeholder="Add a comment" className="input" onChange={this.commentHandler} name="comment" />
        </div>

        <button className="btn btn-secondary">Post Comment</button>
      </form>
    );
  }
}

export default graphql(POST_COMMENT, { name: "postCommentMutation" })(ProjectCommentForm);