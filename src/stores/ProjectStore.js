import { observable, action } from 'mobx';

class ProjectStore {
    @observable title = "";
    @observable description = "";
    @observable project_id = "";
    @observable creator = "";
    @observable headline = "";
    @observable modalOpen = false;
    @observable updateModalOpen = false;
    @observable commentFormModalOpen = true;

    @action toggleProjectModal = (isOpen = false) => {
        this.modalOpen = isOpen;
    }

    @action toggleCommentModal = (isOpen = false) => {
        this.commentFormModalOpen = isOpen;
    }

    @action toggleUpdateProjectModal = (isOpen = false, {title, description, project_id, creator, headline}) => {
        this.updateModalOpen = isOpen;
        this.title = title;
        this.description = description;
        this.project_id = project_id;
        this.creator = creator;
        this.headline = headline;
    }
}

export default new ProjectStore();