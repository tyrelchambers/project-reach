import { observable, action } from 'mobx';

class ProjectStore {
    @observable title = "";
    @observable description = "";
    @observable project_id = "";
    @observable creator = "";
    @observable modalOpen = false;
    @observable updateModalOpen = false;

    @action toggleProjectModal = (isOpen = false) => {
        this.modalOpen = isOpen;
    }

    @action toggleUpdateProjectModal = (isOpen = false, {title, description, project_id, creator}) => {
        this.updateModalOpen = isOpen;
        this.title = title;
        this.description = description;
        this.project_id = project_id;
        this.creator = creator;
    }
}

export default new ProjectStore();