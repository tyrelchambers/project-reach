import React, { Component } from 'react';
import '../Modals.scss';

class ProjectIndexModal extends Component {
  render() {
    return(
      <div className="modal__wrapper ">
        <div className="modal__content modal__project">
          <header className="modal__header--project">
            <h1 className="modal__title">{this.props.title}</h1>
            <p className="modal__description">{this.props.description}</p>
          </header>
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
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectIndexModal;