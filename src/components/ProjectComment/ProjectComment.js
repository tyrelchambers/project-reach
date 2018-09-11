import React from 'react';
import './ProjectComment.scss';
import '../../pages/ProjectIndexPage/ProjectIndexPage.scss';

const ProjectComment = props => (
  <div className="feedback__wrapper">
    <header className="feedback__header row jc-sb ai-c">
      <div className="column">
        <p className="feedback__creator no-margin bold">{props.creator}</p>
        <p className="no-margin">Occupation</p>
      </div>
      <InterestRating interestRating={props.interestRating}/>
    </header>
    <div className="feedback__proscons">
      <div className="column">
        <p><strong>Pros: </strong>{props.pros.map(x => x + ", ")}</p>
        <p><strong>Cons: </strong>{props.cons.map(x => x + ", ")}</p>
      </div>
    </div>
    <section className="feedback__comment">
      <h3 className="uppercase font small ">Comment</h3>

      <pre>
        {props.comment}
      </pre>
    </section>
    
    <hr className="hr"/>
  </div>
)

const InterestRating = (props) => {
  if (props.interestRating === "yes") {
    return (
      <div className="social-vote__item green-vote" id="social-vote__item--upvote">
        <i className="far fa-thumbs-up"></i>
      </div>
    );
  } else if (props.interestRating === "maybe") {
    return (
      <div className="social-vote__item grey-vote" id="social-vote__item--mehvote">
        <div className="dash"></div>
      </div>
    );
  } else {
    return (
      <div className="social-vote__item red-vote" id="social-vote__item--downvote">
        <i className="far fa-thumbs-down"></i>
      </div>
    );
  }
}

export default ProjectComment;