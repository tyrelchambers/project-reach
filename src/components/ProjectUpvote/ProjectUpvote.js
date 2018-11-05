import React from 'react';
import '../../assets/stylesheets/btn.scss';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { observer, inject } from 'mobx-react';

const UPVOTE_PROJECT = gql`
  mutation upvoteProject($project_id: String, $upvote: Int, $upvoters: String) {
    upvoteProject(project_id: $project_id, upvote: $upvote, upvoters: $upvoters)
  }
`;

@inject("ProjectStore", "AuthStore")
@observer
class ProjectUpvote extends React.Component {
  constructor(props) {
    super(props);
    this.upvoteCount = this.props.upvoteCount;
    this.disabled = false;
  }
  
  projectHandler = () => {
    this.disabled = true;
    this.upvoteCount += 1;
  }

  componentDidMount = () => {
    this.updateCountHandler(); 
    this.hasBeenUpvoted();
  }

  hasBeenUpvoted = () => {
    const user = this.props.AuthStore.getEmail();
    const upvoterList = this.props.upvoterList;
    upvoterList.map(x => {
      if ( x === user ) {
        this.disabled = true;
      }
    });
  }

  updateCountHandler = () => {
    const count = this.props.upvoteCount;
    this.setState({projectUpvote: count});
  }
  render() {
    return(
      <Mutation
        mutation={UPVOTE_PROJECT}
      >
        {upvoteProject => (
          <form onSubmit={e => {
            e.preventDefault();
            upvoteProject({
              variables: {
                project_id: this.props.projectId,
                upvote: this.state.projectUpvote,
                upvoters: this.props.upvoters
              }
            });
            console.log('sent');
          }}>
            <InputSelector state={this.disabled} upvoteCount={this.upvoteCount} projectHandler={this.projectHandler}/>
          </form>
        )}
      </Mutation>
    );
  }
}

const InputSelector = (props) => {
  if ( props.state === true ) {
    return(
      <button type="submit" className="bold uppercase btn btn-primary no-margin wide disabled" onClick={props.projectHandler} disabled>Already Upvoted ({props.upvoteCount})</button>
    );
  } else {
    return(
      <button type="submit" className="bold uppercase btn btn-primary no-margin wide" onClick={props.projectHandler}>upvote {props.upvoteCount}</button>
    );
  }
}

export default ProjectUpvote;