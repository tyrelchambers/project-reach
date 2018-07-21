import { observable, action, reaction } from 'mobx';

class AuthStore {
  constructor() {
    reaction(
      () => this.email,
      email => window.localStorage.setItem("email", email),
      {
        fireImmediately: true
      }
    );
  }

  @observable email = "" || window.localStorage.getItem("email");
  @observable password = "";
  @observable token = "";

  @action setEmail(email) {
    this.email = email;
  }

  @action setPassword(password) {
    this.password = password;
  }

  renderRedirect = (route) => window.location = route;

  setCookie = (token) => {
    this.token = token;
    window.localStorage.setItem('jwt', token);
  }

  getCookie = () => {
    return window.localStorage.getItem('jwt');
  }

  logoutUser = () => {
    window.localStorage.clear("jwt");
    return window.location = "/";
  }
}

export default new AuthStore();