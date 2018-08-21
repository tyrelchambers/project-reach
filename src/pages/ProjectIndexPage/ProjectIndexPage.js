import React, { Component } from 'react';
import './ProjectIndexPage.scss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProjectCommentForm from '../../components/Forms/ProjectCommentForm';
import ProjectComment from '../../components/ProjectComment/ProjectComment';
import { observer, inject } from 'mobx-react';

const FIND_PROJECT = gql`
  query projectById($project_id:String) {
    projectById(project_id: $project_id) {
      title,
      description,
      headline,
      comments {
        comment
      }
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
          if (loading) return "Loading...";
          if (error) return error;
          console.log(data);
          return (
            <div className="container small center">
              <header className="column">
                <h1 className="title">{data.projectById.title}</h1>
                <p className="headline subtitle">{data.projectById.headline}</p>
              </header>
              <hr className="hr"/>
              <div className="row jc-sb">
                <main>
                  <div className="modal__image--hero">
                  
                  </div>
                  <div>
                    <div className="row uppercase font small">
                      <p>Created: August 16th, 2018</p>
                    </div>
                    <div className="box">
                      <h3 className="uppercase font small">About the project</h3>
                      <p>Lorem ipsum dolor amet flexitarian man bun sriracha pok pok cloud bread. Single-origin coffee leggings chartreuse woke cray meh. Humblebrag narwhal poutine health goth sriracha YOLO. Tattooed literally kinfolk, YOLO PBR&B drinking vinegar etsy. Occupy fashion axe hot chicken 3 wolf moon edison bulb craft beer. Distillery cred bicycle rights, bitters copper mug hexagon YOLO affogato.</p>
                      <p>Lorem ipsum dolor amet flexitarian man bun sriracha pok pok cloud bread. Single-origin coffee leggings chartreuse woke cray meh. Humblebrag narwhal poutine health goth sriracha YOLO. Tattooed literally kinfolk, YOLO PBR&B drinking vinegar etsy. Occupy fashion axe hot chicken 3 wolf moon edison bulb craft beer. Distillery cred bicycle rights, bitters copper mug hexagon YOLO affogato.</p>
                      <p>Lorem ipsum dolor amet flexitarian man bun sriracha pok pok cloud bread. Single-origin coffee leggings chartreuse woke cray meh. Humblebrag narwhal poutine health goth sriracha YOLO. Tattooed literally kinfolk, YOLO PBR&B drinking vinegar etsy. Occupy fashion axe hot chicken 3 wolf moon edison bulb craft beer. Distillery cred bicycle rights, bitters copper mug hexagon YOLO affogato.</p>
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
                          <p>12</p>
                        </div>
                        <ProjectCommentForm project_id={slug}/>
                        {data.projectById.comments.map((x, id) => {
                          return(
                            <ProjectComment comment={x.comment} creator={window.localStorage.getItem("email")} key={id} />
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