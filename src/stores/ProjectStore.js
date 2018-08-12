import { observable, action } from 'mobx';

class ProjectStore {
    @observable title = "";
    @observable description = "";
    @observable modalOpen = false;

    @action toggleProjectModal = () => {
        this.modalOpen = !this.modalOpen;
    }
}

export default new ProjectStore();