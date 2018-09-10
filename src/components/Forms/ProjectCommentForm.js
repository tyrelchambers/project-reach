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
      comment: "",
      interestRating: "",
      pros: "",
      cons: "",
      prosList: [
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        },
        {
          value: "interesting-idea",
          option: "Interesting Idea"
        }
      ],
      consList: [{
        value: "interesting-idea",
        option: "Interesting Idea"
      }]
    }
  }
  _postCommentHandler = () => {
    const { comment, interestRating, pros, cons } = this.state;
    const project_id = this.props.project_id;
    
    // this.props.postCommentMutation({
    //   variables: {
    //     comment,
    //     interestRating,
    //     pros,
    //     cons,
    //     project_id,
    //     creator: this.props.AuthStore.getCookie()
    //   }
    // });

    console.log(comment, + ' ' + interestRating + ' ' + pros + " " + cons + " " + project_id);
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
            <ProComponent prosList={this.state.prosList} />
          </div>

          <div className="form-group ai-c">
            <h3>Cons:</h3>
            <ConComponent consList={this.state.consList} />
          </div>
        </div>
        <div className="form-group">
          <h3 className="bold">Leave your feedback</h3>
          <textarea type="text" placeholder="Add a comment" className="input" onChange={this.commentHandler} name="comment" />
        </div>

        <div className="form-actions jc-fe ">
          <button className="btn btn-secondary">Post Comment</button>

        </div>
      </form>
    );
  }
}

const ProComponent = (props) => {
  return(
    <select name="pros-list" className="select-field" id="prosList" multiple>
      <option value="Pick a con" disabled selected>Pick a pro</option>
      {props.prosList.map((x, id) => (
        <option key={id} value={x.value}>{x.option}</option>
      ))}
    </select>
  );
}

const ConComponent = (props) => {
  return(
    <select name="cons-list" className="select-field" id="consList" multiple>
      <option value="Pick a con" disabled selected>Pick a con</option>
      {props.consList.map((x, id) => (
        <option key={id} value={x.value}>{x.option}</option>
      ))}
    </select>
  );
}
export default graphql(POST_COMMENT, { name: "postCommentMutation" })(ProjectCommentForm);