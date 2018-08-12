import { observable, action } from 'mobx';

class ProjectStore {
    @observable title = "";
    @observable description = "";
    @observable modalOpen = false;

    @action toggleProjectModal = (isOpen = false) => {
        this.modalOpen = isOpen;
    }
}

export default new ProjectStore();