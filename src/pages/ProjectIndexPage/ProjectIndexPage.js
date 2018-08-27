import React, { Component } from 'react';
import './ProjectIndexPage.scss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProjectCommentForm from '../../components/Forms/ProjectCommentForm';
import ProjectComment from '../../components/ProjectComment/ProjectComment';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import LoadingSplash from '../../components/LoadingSplash/LoadingSplash';

const FIND_PROJECT = gql`
  query projectById($project_id:String) {
    projectById(project_id: $project_id) {
      title,
      description,
      headline,
      comments {
        comment,
        creator,
        created_at
      },
      created_at
    }
  }
`;
@inject('AuthStore')
@observer
class ProjectIndexPage extends Component {
  render() {
    const slug = this.props.match.params.project_slug;
    return(
      <Query
        query={FIND_PROJECT}
        variables={{project_id: slug}}
      >
        {({loading, error, data}) => {
          if (loading) return <LoadingSplash/>;
          if (error) return error;
          const created_at = data.projectById.created_at;
          return (
            <div className="container small center">
              <header className="column">
                <h1 className="title">{data.projectById.title}</h1>
                <p className="headline subtitle">{data.projectById.headline}</p>
              </header>
              <div className="row jc-sb">
                <main>
                  <div className="modal__image--hero">
                  
                  </div>
                  <div>
                    
                    <div className="box description">
                      <h3 className="uppercase font small">About the project</h3>
                      <pre>
                        {data.projectById.description}
                      </pre>
                    </div>
                    <div className="row ">
                      <p className="uppercase font small bold">Created: {created_at}</p>
                    </div>
                    <hr className="hr"/>
                    <div className="column">
                      <h3 className="uppercase font small ">Feedback</h3>
                      <div className="row">
                        <span className="feedback-action row bold like-action">
                          <i className="fas fa-thumbs-up"></i>
                          <p className="uppercase font small">Like</p>
                        </span>
                        <span className="feedback-action row bold dislike-action">
                          <i className="fas fa-thumbs-down"></i>
                          <p className="uppercase font small">Dislike</p>
                        </span>
                      </div>
                      <hr className="hr"/>
                      <div className="column">
                        <div className="row jc-sb ai-c">
                          <h3 className="uppercase font small">Comments</h3>
                          <p>{data.projectById.comments.length}</p>
                        </div>
                        <ProjectCommentForm project_id={slug}/>
                        {data.projectById.comments.map((x, id) => {
                          return(
                            <ProjectComment comment={x.comment} creator={x.creator} key={id} />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </main>
                <aside>
                <h3 className="uppercase font small">About the creator</h3>
                  <div className="about__creator">
                    <span className="about__creator--header">
                      <h4>Tyrel Chambers</h4>
                      <p className="subtitle">Joined 2 years ago</p>
                    </span>  
                    <p>
                      A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum.
                    </p>              
                  </div>
                  <hr className="hr"/>
                  <div className="column">
                    <h3 className="uppercase font small">Social</h3>
                    <ul className="row social-links small">
                      <li>One like</li>
                      <li>Two Link</li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ProjectIndexPage;