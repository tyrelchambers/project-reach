import { observable, action } from 'mobx';

class ProjectStore {
    @observable title = "";
    @observable description = "";
}

export default new ProjectStore();