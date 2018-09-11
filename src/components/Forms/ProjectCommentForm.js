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
      selectedPros: [],
      selectedCons: [],
      prosList: [
        "Interesting Idea",
        "Good Business Model",
        "High Potential",
        "Good Design Mockups",
        "Respected Founder",
        "Respected Team"
      ],
      consList: [
        "Idea Needs Rethinking",
        "Idea Doesn't Seem Feasible",
        "Founder Inconsistent",
        "Team Needs Improvement",
        "Design Needs Improvement",
        "Need Higher Fidelity Mockups",
        "Need Design Mockups",
        "Doesn't Seem Profitable"
      ]
    }
  }

  componentDidMount = () => {
    const listItems = document.querySelectorAll(".selector__wrapper--item");

    listItems.forEach(x => {
      x.addEventListener('click', () => {
        this.selectorHandler(x);
      });
    });
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
    const wrapper = document.querySelector("#proSelectorList");
    const selected = wrapper.querySelectorAll('.active-item');
    
    let arr = [...selected];

    this.setState({selectedPros: [...arr]});
    wrapper.classList.add('hidden');
  }

  getSelectedCons = () => {
    const wrapper = document.querySelector("#conSelectorList");
    const selected = wrapper.querySelectorAll('.active-item');
    let arr = [...selected];

    this.setState({selectedCons: [...arr]});
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

          {/* Pros Section */}
            <h3>Pros:</h3>
            <div className="column">
              {
                this.state.selectedPros.map((x, id) => <p key={id} className="selected-feedback ta-c">{x.innerHTML}</p>)
              }
            </div>
            <p className="thin blue underline" onClick={() => document.querySelector('#proSelectorList').classList.remove('hidden')}>{this.state.selectedPros.length < 1 ? "+ add pro(s)" : "edit pros"}</p>
            <ProComponent prosList={this.state.prosList} clicked={this.getSelectedPros}/>
          </div>
          
          {/* Cons Section */}
          <div className="form-group ai-c">
            <h3>Cons:</h3>
            <div className="column">
              {
                this.state.selectedCons.map((x, id) => <p key={id} className="selected-feedback ta-c">{x.innerHTML}</p>)
              }
            </div>
            <p className="thin blue underline" onClick={() => document.querySelector('#conSelectorList').classList.remove('hidden')}>{this.state.selectedCons.length < 1 ? "+ add con(s)" : "edit cons"}</p>
            <ConComponent consList={this.state.consList} clicked={this.getSelectedCons} />
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
    <div className="selector__wrapper hidden" id="proSelectorList">
      <ul >
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
    <div className="selector__wrapper hidden" id="conSelectorList">
      <ul >
        {props.consList.map((x, id) => (
          <li key={id} className="selector__wrapper--item">{x}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={props.clicked}>Add Selected</button>
    </div>
  );
}
export default graphql(POST_COMMENT, { name: "postCommentMutation" })(ProjectCommentForm);