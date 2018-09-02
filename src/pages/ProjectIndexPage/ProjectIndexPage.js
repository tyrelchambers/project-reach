import React, { Component } from 'react';
import './ProjectIndexPage.scss';
import '../../assets/stylesheets/btn.scss';
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
              <header className="row project__header jc-sb ai-c">
                <div className="row">
                  <div className="project-thumbnail"></div>
                  <div className="column">
                    <h2 className="title no-margin">{data.projectById.title}</h2>
                    <p className="headline subtitle">{data.projectById.headline}</p>
                  </div>
                </div>
                <i className="far fa-bell notification-bell"></i>
              </header>
              <div className="row jc-sb">
                <main>
                  <div className="column">
                    <div className="modal__image--hero"></div>
                    <div className="row thumbnail__list">
                      <div className="thumbnail__item"></div>
                      <div className="thumbnail__item"></div>
                      <div className="thumbnail__item"></div>
                      <div className="thumbnail__item"></div>
                    </div>
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
                      <div className="column">
                        <div className="row jc-sb ai-c">
                        <h3 className="uppercase font small ">Feedback</h3>
                        </div>
                        <div className="feedback">
                          <div className="row jc-sb ai-c">
                            <h4 className="bold">Project interest</h4>
                            <p>{data.projectById.comments.length} reviews</p>
                          </div>
                          <div className="row">
                            <div className="row social-vote__list">
                              <div className="social-vote__item ai-c jc-c row">
                                <i className="far fa-thumbs-up icon"></i>
                                <p>42</p>
                              </div>
                              <div className="social-vote__item ai-c jc-c row">
                                <div className="dash icon"></div>
                                <p>10</p>
                              </div>
                              <div className="social-vote__item ai-c jc-c row">
                                <i class="far fa-thumbs-down icon"></i>
                                <p>3</p>
                              </div>
                            </div>
                          </div>
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
                  <div className="project__upvote ">
                    <p className="bold uppercase btn btn-primary no-margin">upvote 1,600</p>
                  </div>
                  <div className="row project__website-link jc-sb ai-c">
                    <div className="column">
                      <p className="bold">Website</p>
                      <p>www.project.com</p>
                    </div>
                    <img src={require('../../assets/002-scale-symbol.png')} className="logo small" alt="External Link Button"/>
                  </div>
                  <div className="about__creator">
                    <h4 className="no-margin">Tyrel Chambers</h4>  
                    <p>
                      A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum. A little lorem ipsum.
                    </p>       
                    <p className="subtitle">Joined 2 years ago</p>       
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