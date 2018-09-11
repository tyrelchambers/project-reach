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
      selectedPros: [],
      prosList: [
        "Interesting Idea",
        "Good Business Model",
        "High Potential",
        "Good Design Mockups",
        "Respected Founder",
        "Respected Team"
      ],
      consList: [{
        option: "Interesting Idea"
      }]
    }
  }

  componentDidMount = () => {
    const list = document.querySelector("#proSelectorList");
    const listItems = list.querySelectorAll(".selector__wrapper--item");

    listItems.forEach(x => {
      x.addEventListener('click', () => {
        this.selectorHandler(x);
      });
    });
    console.log(this.state.selectedPros);

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

    //console.log(comment, + ' ' + interestRating + ' ' + pros + " " + cons + " " + project_id);
  }

  submitHandler = (e) => {
    e.preventDefault();
    this._postCommentHandler();
  }

  commentHandler = (e) => {
    const value = e.target.value;

    this.setState({comment: value});
  }

  getSelectedPros = () => {
    const selected = document.querySelectorAll('.active-item');
    const wrapper = document.querySelector(".selector__wrapper");
    let arr = [...selected];

    this.setState({selectedPros: [...arr]});
    wrapper.classList.add('hidden');
  }

  selectorHandler = (x) => {
    x.classList.toggle('active-item');
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
        <div className="row jc-sb relative">
          <div className="form-group ai-c ">
            <h3>Pros:</h3>
            <div className="column">
              {
                this.state.selectedPros.map((x, id) => <p key={id} className="selected-feedback ta-c">{x.innerHTML}</p>)
              }
            </div>
            <p className="thin blue underline" onClick={() => document.querySelector('.selector__wrapper').classList.remove('hidden')}>{this.state.selectedPros.length < 1 ? "+ add pro(s)" : "edit pros"}</p>
            <ProComponent prosList={this.state.prosList} clicked={this.getSelectedPros}/>
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
    <div className="selector__wrapper hidden">
      <ul id="proSelectorList">
        {props.prosList.map((x, id) => (
          <li key={id} className="selector__wrapper--item">{x}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={props.clicked}>Add Selected</button>
    </div>
  );
}

const ConComponent = (props) => {
  return(
    <select name="cons-list" className="select-field" id="consList" multiple>
      <option value="Pick a con" disabled >Pick a con</option>
      {props.consList.map((x, id) => (
        <option key={id} value={x.value}>{x.option}</option>
      ))}
    </select>
  );
}
export default graphql(POST_COMMENT, { name: "postCommentMutation" })(ProjectCommentForm);